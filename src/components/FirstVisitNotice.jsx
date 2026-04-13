function FirstVisitNotice({ onContinue }) {
  return (
    <aside className="pointer-events-none fixed inset-x-4 bottom-4 z-50 sm:left-auto sm:right-6 sm:max-w-sm">
      <div
        className="surface-card-strong sketch-panel pointer-events-auto relative overflow-hidden rounded-3xl px-5 py-6 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)] sm:px-6"
        role="status"
        aria-live="polite"
        aria-labelledby="first-visit-notice-title"
        aria-describedby="first-visit-notice-description"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" />

        <p className="eyebrow">Quick Note</p>
        <h2
          id="first-visit-notice-title"
          className="mt-3 font-display text-2xl font-semibold tracking-tight text-text-primary"
        >
          Thanks for visiting my portfolio
        </h2>
        <p
          id="first-visit-notice-description"
          className="mt-3 text-sm leading-7 text-text-muted sm:text-[15px]"
        >
          I'm still improving this portfolio as I learn more, but you can look
          around, check my projects, and try the theme and style toggles.
        </p>

        <div className="mt-6">
          <button type="button" className="primary-link w-full" onClick={onContinue}>
            Got It
          </button>
        </div>
      </div>
    </aside>
  );
}

export default FirstVisitNotice;
