'use client';

type Props = {
  options: string[];
  correct: string;
  selected: string | null;
  onSelect: (option: string) => void;
  disabled: boolean;
};

function stateFor(
  option: string,
  selected: string | null,
  correct: string,
  disabled: boolean,
): 'correct' | 'wrong' | 'dim' | undefined {
  if (!disabled) return undefined;
  if (option === correct) return 'correct';
  if (option === selected) return 'wrong';
  return 'dim';
}

export default function OptionsList({
  options,
  correct,
  selected,
  onSelect,
  disabled,
}: Props) {
  return (
    <div className="space-y-2 sm:space-y-3">
      {options.map((opt, i) => {
        const state = stateFor(opt, selected, correct, disabled);
        return (
          <button
            key={opt}
            type="button"
            disabled={disabled}
            data-state={state}
            className="option-btn"
            onClick={() => !disabled && onSelect(opt)}
          >
            <span className="font-octarine text-base mr-3 text-lfg-black/40">
              {i + 1}.
            </span>
            <span className="font-dm">{opt}</span>
          </button>
        );
      })}
      <p className="text-xs font-dm text-gray-500 pt-2">
        Tip: press <kbd className="font-dm font-bold">1</kbd>–<kbd className="font-dm font-bold">4</kbd> to choose, <kbd className="font-dm font-bold">Enter</kbd> to advance.
      </p>
    </div>
  );
}
