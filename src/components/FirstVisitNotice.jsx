function FirstVisitNotice({ onContinue }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
      <div className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm" aria-hidden="true" />

      <div
        className="surface-card-strong relative z-10 w-full max-w-md overflow-hidden rounded-3xl px-5 py-6 sm:px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="first-visit-notice-title"
        aria-describedby="first-visit-notice-description"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" />

        <p className="eyebrow">⚠️ Notice</p>
        <h2
          id="first-visit-notice-title"
          className="mt-3 font-display text-2xl font-semibold tracking-tight text-text-primary"
        >
          Welcome to my portfolio
        </h2>
        <p
          id="first-visit-notice-description"
          className="mt-3 text-sm leading-7 text-text-muted sm:text-[15px]"
        >
          This portfolio is still being improved, so you may notice some UI glitches. Feel free to explore!
        </p>

        <div className="mt-6">
          <button type="button" className="primary-link w-full" onClick={onContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstVisitNotice;
