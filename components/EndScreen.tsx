import type { Case } from '@/data/cases';

type Props = {
  score: number;
  total: number;
  streak: number;
  best: number;
  history: { caseId: string; correct: boolean }[];
  cases: Case[];
  onRestart: () => void;
};

function verdict(pct: number): { label: string; tone: string } {
  if (pct >= 0.9) return { label: 'crown court material', tone: 'bg-lfg-blue' };
  if (pct >= 0.75) return { label: 'sharp legal mind', tone: 'bg-lfg-blue' };
  if (pct >= 0.5) return { label: 'on the bench', tone: 'bg-lfg-yellow' };
  if (pct >= 0.25) return { label: 'jury service', tone: 'bg-lfg-yellow' };
  return { label: 'remand wing', tone: 'bg-lfg-orange text-white' };
}

export default function EndScreen({
  score,
  total,
  streak,
  best,
  history,
  cases,
  onRestart,
}: Props) {
  const pct = total > 0 ? score / total : 0;
  const v = verdict(pct);
  const byId = new Map(cases.map((c) => [c.id, c]));

  return (
    <div className="space-y-6">
      <div className={`case-card shadow-[6px_6px_0_0_#000]`}>
        <div className={`${v.tone} px-5 sm:px-7 py-6 border-b-2 border-lfg-black`}>
          <p className="font-dm text-xs uppercase tracking-widest opacity-70 mb-2">
            Final verdict
          </p>
          <p className="font-octarine text-5xl sm:text-6xl leading-none mb-2">
            {score} / {total}
          </p>
          <p className="font-octarine text-2xl sm:text-3xl">{v.label}</p>
        </div>
        <div className="px-5 sm:px-7 py-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <p className="font-dm text-xs uppercase tracking-widest text-gray-500">
              Accuracy
            </p>
            <p className="font-octarine text-2xl">{Math.round(pct * 100)}%</p>
          </div>
          <div>
            <p className="font-dm text-xs uppercase tracking-widest text-gray-500">
              Best streak
            </p>
            <p className="font-octarine text-2xl">{Math.max(streak, best)}</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <button onClick={onRestart} className="btn-primary w-full">
              Play again
            </button>
          </div>
        </div>
      </div>

      <div className="case-card">
        <div className="px-5 sm:px-7 py-4 border-b-2 border-lfg-black">
          <h3 className="font-octarine text-xl">your answers</h3>
        </div>
        <ul className="divide-y-2 divide-lfg-black/10">
          {history.map((h, i) => {
            const c = byId.get(h.caseId);
            if (!c) return null;
            return (
              <li
                key={`${h.caseId}-${i}`}
                className="px-5 sm:px-7 py-3 flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <p className="font-dm font-medium truncate">
                    {i + 1}. {c.name}
                  </p>
                  <p className="font-dm text-xs text-gray-500 truncate">
                    {c.sentenceLabel}
                  </p>
                </div>
                <span
                  className={`font-octarine text-sm px-2 py-1 border-2 border-lfg-black flex-shrink-0 ${
                    h.correct ? 'bg-lfg-blue' : 'bg-lfg-orange text-white'
                  }`}
                >
                  {h.correct ? '✓' : '✗'}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
