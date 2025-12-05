'use client';

import { useQuery } from '@tanstack/react-query';

interface SpotifyTrack {
  isPlaying: boolean;
  track: string;
  artist: string;
  url?: string;
}

async function fetchSpotify() {
  const response = await fetch('/api/spotify');
  if (!response.ok) {
    throw new Error('Failed to fetch Spotify data');
  }
  return response.json();
}

export function Spotify() {
  const { data } = useQuery<{ track: SpotifyTrack | null }>({
    queryKey: ['spotify'],
    queryFn: fetchSpotify,
    refetchInterval: 30 * 1000
  });

  if (!data?.track) {
    return null;
  }

  const { track, artist, url, isPlaying } = data.track;

  return (
    <a
      href={url || 'https://spotify.com'}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 transition-opacity group underline-offset-4"
    >
      <div
        className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-yellow-500'}`}
      />
      <span className="truncate max-w-xs group-hover:underline">{track}</span>
      <span className="opacity-70 text-xs truncate">{artist}</span>
    </a>
  );
}
