type Props = {
  score: number;
  attempts: number;
  total: number;
  streak: number;
  best: number;
  onReset: () => void;
};

export default function ScoreBar({ score, attempts, total, streak, best, onReset }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <div className="stat-pill">
        <span className="font-dm text-xs uppercase tracking-widest text-gray-500">Score</span>
        <span className="font-octarine text-base">
          {score} / {attempts}
        </span>
        <span className="font-dm text-xs text-gray-500">of {total}</span>
      </div>
      <div className="stat-pill">
        <span className="font-dm text-xs uppercase tracking-widest text-gray-500">Streak</span>
        <span className="font-octarine text-base text-lfg-orange">{streak}</span>
      </div>
      <div className="stat-pill">
        <span className="font-dm text-xs uppercase tracking-widest text-gray-500">Best</span>
        <span className="font-octarine text-base">{best}</span>
      </div>
      <button onClick={onReset} className="btn-secondary text-xs ml-auto">
        Reset
      </button>
    </div>
  );
}
