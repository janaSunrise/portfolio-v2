'use client';

import { useEffect, useState } from 'react';

export function Clock() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    const updateTime = () => {
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return <span className="opacity-0">00:00 AM</span>;

  return <span>{time}</span>;
}
