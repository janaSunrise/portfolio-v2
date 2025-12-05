import { NextResponse } from 'next/server';

interface SpotifyTrack {
  name: string;
  artists: Array<{ name: string }>;
  external_urls: { spotify: string };
}

interface TokenResponse {
  access_token: string;
}

interface CurrentlyPlayingResponse {
  is_playing: boolean;
  item: SpotifyTrack | null;
}

interface RecentlyPlayedResponse {
  items: Array<{ track: SpotifyTrack }>;
}

interface Track {
  isPlaying: boolean;
  track: string;
  artist: string;
  url: string;
}

async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Missing Spotify credentials');
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  });

  if (!response.ok) {
    throw new Error('Failed to refresh Spotify token');
  }

  const data: TokenResponse = await response.json();
  return data.access_token;
}

async function getCurrentlyPlaying(accessToken: string): Promise<Track | null> {
  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );

  if (response.status === 204 || response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error('Failed to fetch currently playing track');
  }

  const data: CurrentlyPlayingResponse = await response.json();
  if (!data.item) return null;

  return {
    isPlaying: data.is_playing,
    track: data.item.name,
    artist: data.item.artists.map(a => a.name).join(', '),
    url: data.item.external_urls.spotify
  };
}

async function getLastPlayed(accessToken: string): Promise<Track | null> {
  const response = await fetch(
    'https://api.spotify.com/v1/me/player/recently-played?limit=1',
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch recently played tracks');
  }

  const data: RecentlyPlayedResponse = await response.json();
  if (data.items.length === 0) return null;

  const track = data.items[0].track;
  return {
    isPlaying: false,
    track: track.name,
    artist: track.artists.map(a => a.name).join(', '),
    url: track.external_urls.spotify
  };
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();
    const [currentlyPlaying, lastPlayed] = await Promise.all([
      getCurrentlyPlaying(accessToken),
      getLastPlayed(accessToken)
    ]);

    const track = currentlyPlaying || lastPlayed;
    return NextResponse.json({ track });
  } catch (error) {
    console.error('Spotify API error:', error);
    return NextResponse.json({ track: null });
  }
}
