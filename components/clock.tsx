'use client';

import { useEffect, useState } from 'react';

const MINUTE = 60_000;

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Kolkata',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23'
});

export function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const now = Date.now();
      setTime(formatter.format(now));
      timeout = setTimeout(tick, MINUTE - (now % MINUTE));
    };

    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className={time ? '' : 'opacity-0'}>{time || '00:00'} IST</span>
  );
}
