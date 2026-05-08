import type { Case } from '@/data/cases';

type Props = {
  case: Case;
  correct: boolean;
  onNext: () => void;
  isLast: boolean;
};

const dateFmt = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export default function RevealPanel({ case: c, correct, onNext, isLast }: Props) {
  return (
    <div className="case-card mt-3 animate-slideIn">
      <div
        className={`px-5 sm:px-7 py-3 border-b-2 border-lfg-black flex items-center justify-between gap-4 ${
          correct ? 'bg-lfg-blue' : 'bg-lfg-orange text-white'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="font-octarine text-2xl">
            {correct ? '✓ correct' : '✗ wrong'}
          </span>
          <span className="font-dm text-sm opacity-80">
            {dateFmt.format(new Date(c.date))}
          </span>
        </div>
        <button onClick={onNext} className="btn-secondary text-sm">
          {isLast ? 'See results' : 'Next →'}
        </button>
      </div>
      <div className="px-5 sm:px-7 py-5 sm:py-6 space-y-3">
        <p className="font-dm text-sm uppercase tracking-widest text-gray-500">
          The actual sentence
        </p>
        <p className="font-octarine text-xl leading-tight">
          {c.sentenceLabel.toLowerCase()}
        </p>
        <p className="font-dm text-base leading-relaxed text-lfg-black">
          {c.sentenceDetail}
        </p>
        <p className="font-dm text-xs uppercase tracking-widest text-gray-500 pt-3">
          Source
        </p>
        <a
          href={c.source.url}
          target="_blank"
          rel="noreferrer"
          className="font-dm text-sm underline decoration-lfg-orange decoration-2 underline-offset-4 hover:text-lfg-orange break-words"
        >
          {c.source.publisher} — {c.source.title} ↗
        </a>
      </div>
      <div
        className="countdown-bar"
        style={{ ['--ms' as never]: '4500ms' }}
      />
    </div>
  );
}
