# guess the sentence

A quiz on UK criminal sentencing, in the style of [guesstheparty.co.uk](https://guesstheparty.co.uk). The user reads the crime, then picks the punishment the court actually handed down.

Built by [looking for growth](https://lookingforgrowth.uk) using the LFG brand system.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## How it works

- 25 real UK criminal cases live in `data/cases.ts`. Each case has a name, crime summary, the actual sentence (the canonical answer), four multiple-choice options, the date, the court, and a sourced citation.
- The order of cases and the order of the four options are shuffled per round.
- Score, streak and best streak are tracked. Best streak persists in `localStorage` so it survives reloads.
- After each guess, the panel reveals the correct sentence, sentencing detail, and a link to the source.
- Keyboard: <kbd>1</kbd>–<kbd>4</kbd> selects an option, <kbd>Enter</kbd> / <kbd>Space</kbd> / <kbd>→</kbd> advances after answering.

## Sourcing

Every case is taken from the public record. Sources are predominantly BBC News, with a few older cases (pre-2005) using the BBC's archive. Each case in the dataset includes a `source` block with the publisher, article title and URL.

The dataset was drafted from memory and then independently fact-checked by a separate verification agent against current online sources. Where the original sentencing event was later modified (e.g. an appeal, an Attorney General's referral, or a Schedule 21 tariff review), the canonical answer reflects the sentence the trial judge actually imposed at the date stated, with the later modification described in the reveal text.

## Photos

`public/photos/{id}.jpg` is loaded if present, otherwise a styled LFG-branded placeholder card is shown using the case ID and name. To add real photos, drop a JPEG into `public/photos/` named with the case `id` (e.g. `letby.jpg`).

If you do add real photos, you are responsible for licensing them — most press photos are copyrighted. Public-domain custody photos, Wikimedia Commons content, or commissioned illustrations are safer.

## Brand

Colours, typography and the graphical motif come from the LFG Brand Bible:

- Octarine (bold/light) — headlines, lowercase
- DM Sans (regular/black) — body, sentence case
- Brand colours — `#000000` black, `#FE5500` orange, `#EE9944` yellow, `#79CAC4` blue, `#EBE3D0` cream

Octarine font files live in `public/fonts/`.

## Stack

- Next.js 14 (app router)
- React 18
- TypeScript
- Tailwind CSS
- No backend; everything is static.

## License

The code is MIT. The case data summarises facts already in the public record and links back to the original reporting; reproduction beyond fair use is the reproducer's responsibility.
