export default function Header() {
  return (
    <header className="border-b-2 border-lfg-black bg-lfg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <a href="/" className="font-octarine text-xl sm:text-2xl tracking-tight leading-none">
          guess the sentence
        </a>
        <a
          href="https://lookingforgrowth.uk"
          target="_blank"
          rel="noreferrer"
          className="font-dm text-xs sm:text-sm font-medium underline decoration-lfg-orange decoration-2 underline-offset-4 hover:text-lfg-orange transition-colors"
        >
          lookingforgrowth.uk
        </a>
      </div>
      <div className="brand-motif" />
    </header>
  );
}
