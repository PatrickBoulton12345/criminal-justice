export default function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-lfg-black bg-lfg-black text-white">
      <div className="brand-motif-thick" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-sm font-dm space-y-2">
        <p className="font-octarine text-base lowercase">guess the sentence</p>
        <p className="text-gray-400 max-w-2xl">
          A quiz on UK criminal sentencing. Every case is drawn from the public
          record — sources are linked under each result. Cases reflect the
          sentence imposed at the date shown; later appeals or tariff reviews
          are noted in the case detail where relevant.
        </p>
        <p className="text-gray-500 text-xs pt-2">
          Built by{' '}
          <a
            href="https://lookingforgrowth.uk"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-lfg-orange decoration-2 underline-offset-2 hover:text-lfg-orange"
          >
            looking for growth
          </a>
          . Not legal advice. Information accurate to the cited sources at time of compilation.
        </p>
      </div>
    </footer>
  );
}
