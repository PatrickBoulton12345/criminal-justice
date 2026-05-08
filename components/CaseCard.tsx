import type { Case } from '@/data/cases';
import PhotoPlaceholder from './PhotoPlaceholder';

type Props = {
  case: Case;
  index: number;
  total: number;
};

export default function CaseCard({ case: c, index, total }: Props) {
  return (
    <div className="case-card shadow-[6px_6px_0_0_#000]">
      <PhotoPlaceholder id={c.id} name={c.name} />
      <div className="px-5 sm:px-7 py-5 sm:py-6">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <p className="font-dm text-xs uppercase tracking-widest text-gray-500">
            Case {index + 1} of {total}
          </p>
          <p className="font-dm text-xs text-gray-500">{c.court}</p>
        </div>
        <h2 className="font-octarine text-3xl sm:text-4xl mb-3 leading-tight">
          {c.name.toLowerCase()}
        </h2>
        <p className="font-dm text-base sm:text-lg leading-relaxed text-lfg-black">
          {c.crime}
        </p>
      </div>
    </div>
  );
}
