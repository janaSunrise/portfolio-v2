'use client';

import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Kolkata',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
});

export function Clock() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => setTime(formatter.format(new Date()));
    updateTime();

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className={time ? '' : 'opacity-0'}>{time || '00:00 AM'}</span>;
}
