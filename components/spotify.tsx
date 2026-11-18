'use client';

import { useQuery } from '@tanstack/react-query';

import type { Track } from '@/app/api/spotify/route';

async function fetchSpotify(): Promise<{ track: Track | null }> {
  const response = await fetch('/api/spotify');
  if (!response.ok) {
    throw new Error('Failed to fetch Spotify data');
  }
  return response.json();
}

export function Spotify() {
  const { data } = useQuery({
    queryKey: ['spotify'],
    queryFn: fetchSpotify,
    staleTime: 30 * 1000,
    refetchInterval: 30 * 1000
  });

  if (!data?.track) {
    return null;
  }

  const { track, artist, url, isPlaying } = data.track;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 group underline-offset-4"
    >
      <span
        className={`size-1 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-yellow-500'}`}
      />
      <span className="truncate max-w-xs group-hover:underline">{track}</span>
      <span className="opacity-70 text-xs truncate">{artist}</span>
    </a>
  );
}
