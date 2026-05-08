'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScoreBar from '@/components/ScoreBar';
import CaseCard from '@/components/CaseCard';
import OptionsList from '@/components/OptionsList';
import RevealPanel from '@/components/RevealPanel';
import EndScreen from '@/components/EndScreen';
import { CASES, type Case } from '@/data/cases';
import { shuffle, shuffleCase } from '@/lib/shuffle';

const STATE_KEY = 'criminaljustice.state.v1';
const ADVANCE_MS = 4500;

type HistoryItem = { caseId: string; guess: string; correct: boolean };
type Persisted = { best: number };

function loadBest(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = window.localStorage.getItem(STATE_KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw) as Partial<Persisted>;
    return typeof parsed.best === 'number' ? parsed.best : 0;
  } catch {
    return 0;
  }
}

function saveBest(best: number) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STATE_KEY, JSON.stringify({ best }));
  } catch {
    /* localStorage may be unavailable */
  }
}

export default function HomePage() {
  const [deck, setDeck] = useState<Case[]>(() =>
    shuffle(CASES).map(shuffleCase),
  );
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setBest(loadBest());
  }, []);

  const total = deck.length;
  const current = deck[idx];

  const advance = useCallback(() => {
    if (advanceTimer.current) {
      clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
    if (idx + 1 >= total) {
      setGameOver(true);
      return;
    }
    setIdx((i) => i + 1);
    setSelected(null);
    setAnswered(false);
  }, [idx, total]);

  const handleSelect = useCallback(
    (option: string) => {
      if (answered) return;
      const isCorrect = option === current.sentenceLabel;
      setSelected(option);
      setAnswered(true);
      setHistory((h) => [
        ...h,
        { caseId: current.id, guess: option, correct: isCorrect },
      ]);
      if (isCorrect) {
        setScore((s) => s + 1);
        setStreak((s) => {
          const next = s + 1;
          setBest((b) => {
            if (next > b) {
              saveBest(next);
              return next;
            }
            return b;
          });
          return next;
        });
      } else {
        setStreak(0);
      }
      advanceTimer.current = setTimeout(() => {
        advance();
      }, ADVANCE_MS);
    },
    [answered, current, advance],
  );

  const handleReset = useCallback(() => {
    if (!window.confirm('Reset your score and start a new round?')) return;
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setDeck(shuffle(CASES).map(shuffleCase));
    setIdx(0);
    setScore(0);
    setStreak(0);
    setSelected(null);
    setAnswered(false);
    setHistory([]);
    setGameOver(false);
  }, []);

  const handleRestart = useCallback(() => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setDeck(shuffle(CASES).map(shuffleCase));
    setIdx(0);
    setScore(0);
    setStreak(0);
    setSelected(null);
    setAnswered(false);
    setHistory([]);
    setGameOver(false);
  }, []);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (gameOver) return;
      if (!answered) {
        const i = '1234'.indexOf(e.key);
        if (i >= 0 && current && current.options[i]) {
          handleSelect(current.options[i]);
        }
      } else if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
        e.preventDefault();
        advance();
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [answered, current, gameOver, handleSelect, advance]);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  const attempts = history.length;
  const isLast = idx + 1 >= total;

  return (
    <>
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {!gameOver ? (
          <>
            <div className="mb-6">
              <h1 className="font-octarine text-3xl sm:text-5xl leading-tight mb-2">
                read the crime.
                <br />
                guess the sentence.
              </h1>
              <p className="font-dm text-sm sm:text-base text-gray-600 max-w-2xl">
                25 real UK criminal cases. Pick the punishment the court
                actually imposed. Sources revealed after each guess.
              </p>
            </div>

            <div className="mb-5">
              <ScoreBar
                score={score}
                attempts={attempts}
                total={total}
                streak={streak}
                best={best}
                onReset={handleReset}
              />
            </div>

            {current && (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                <div className="lg:col-span-3">
                  <CaseCard case={current} index={idx} total={total} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                  <OptionsList
                    options={current.options}
                    correct={current.sentenceLabel}
                    selected={selected}
                    onSelect={handleSelect}
                    disabled={answered}
                  />
                  {answered && (
                    <RevealPanel
                      case={current}
                      correct={selected === current.sentenceLabel}
                      onNext={advance}
                      isLast={isLast}
                    />
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <EndScreen
            score={score}
            total={total}
            streak={streak}
            best={best}
            history={history}
            cases={deck}
            onRestart={handleRestart}
          />
        )}
      </main>

      <Footer />
    </>
  );
}
