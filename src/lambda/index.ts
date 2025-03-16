import * as HLS from 'hls-parser'; // For reading/writing the HLS manifest
import fetch from 'node-fetch'; // For making a request to the origin
import { getDesiredSessionVolume, getAbsoluteUrl } from './util';

const HLS_ENDPOINT_URL = process.env.HLS_ENDPOINT_URL as string;
const REQUEST_HEADERS = JSON.parse(process.env.REQUEST_HEADERS as string);
const INDEX_OF_RENDITIONS = Number.parseInt(process.env.INDEX_OF_RENDITIONS as string, 10);
const SESSION_REQUIREMENTS = JSON.parse(process.env.SESSION_REQUIREMENTS as string);
const EVENT_START_TIME = new Date(process.env.EVENT_START_TIME as string);

HLS.setOptions({ silent: true }); // Surpress the error message

export async function handler(event: any) {
  const urlList = event.urlList;
  const desiredSessionVolume = getDesiredSessionVolume(EVENT_START_TIME, SESSION_REQUIREMENTS.graph);
  console.log(`Desired session volume: ${desiredSessionVolume}`);
  if (urlList.length < desiredSessionVolume) {
    const createNum = desiredSessionVolume - urlList.length;
    for (let i = 0; i < createNum; i++) {
      const url = await getRenditionUrl(HLS_ENDPOINT_URL, INDEX_OF_RENDITIONS);
      urlList.push(url);
    }
  } else {
    urlList.length = desiredSessionVolume;
  }
  for (const url of urlList) {
    await getPlaylist(url, false);
  }
  return { urlList, timestamp: new Date().toISOString() };
}

async function getRenditionUrl(masterPlaylistUrl: string, index: number): Promise<string | undefined> {
  const playlist = await getPlaylist(masterPlaylistUrl) as HLS.types.Playlist | undefined;
  if (!playlist || !playlist.isMasterPlaylist) {
    console.error('Failed to fetch the master playlist');
    return undefined;
  }
  const masterPlaylist = playlist as HLS.types.MasterPlaylist;
  if (masterPlaylist.variants.length === 0) {
    console.error('No variant found in the master playlist');
    return undefined;
  }
  return getAbsoluteUrl(masterPlaylistUrl, masterPlaylist.variants[index].uri);
}

async function getPlaylist(url: string, parse = true): Promise<HLS.types.Playlist | string | undefined> {
  const res = await fetch(url, {
    method: 'GET',
    headers: REQUEST_HEADERS,
  });
  if (!res.ok) {
    console.error(`Failed to fetch the HLS manifest: ${res.status} ${res.statusText} - ${url}`);
    return undefined;
  }
  const txt = await res.text();
  if (parse) {
    return HLS.parse(txt);
  }
  return txt;
}
