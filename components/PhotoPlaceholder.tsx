'use client';

import { useState } from 'react';

type Props = {
  id: string;
  name: string;
};

function initials(name: string): string {
  return name
    .replace(/\(.*?\)/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

const ACCENTS = ['bg-lfg-orange', 'bg-lfg-blue', 'bg-lfg-yellow'];

export default function PhotoPlaceholder({ id, name }: Props) {
  const [errored, setErrored] = useState(false);
  const accentIndex =
    Array.from(id).reduce((acc, c) => acc + c.charCodeAt(0), 0) % ACCENTS.length;
  const accent = ACCENTS[accentIndex];

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-lfg-cream border-b-2 border-lfg-black">
      {!errored && (
        <img
          src={`/photos/${id}.jpg`}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setErrored(true)}
        />
      )}
      {errored && (
        <div className={`absolute inset-0 flex items-center justify-center ${accent}`}>
          <div className="text-center">
            <div className="font-octarine text-7xl sm:text-8xl text-lfg-black leading-none">
              {initials(name)}
            </div>
            <div className="mt-3 font-dm text-xs uppercase tracking-widest text-lfg-black/70">
              photo placeholder
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
