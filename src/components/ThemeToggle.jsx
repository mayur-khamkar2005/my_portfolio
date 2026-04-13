import { useTheme } from "../context/ThemeContext";

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.3M12 19.2v2.3M4.8 4.8l1.6 1.6M17.6 17.6l1.6 1.6M2.5 12h2.3M19.2 12h2.3M4.8 19.2l1.6-1.6M17.6 6.4l1.6-1.6" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 14.2A8.8 8.8 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 20 4.5-1 9.7-9.7a2.1 2.1 0 0 0 0-3l-.5-.5a2.1 2.1 0 0 0-3 0L5 15.5 4 20Z" />
      <path d="m13.5 6.5 4 4" />
    </svg>
  );
}

function ThemeToggle({ fullWidth = false, tabIndex, className = "" }) {
  const { theme, toggleTheme, visualMode, toggleVisualMode } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";
  const nextVisualMode = visualMode === "sketch" ? "clean" : "sketch";
  const wrapperClassName = `theme-toggle-shell ${fullWidth ? "w-full" : ""} ${className}`.trim();
  const buttonClassName = `theme-toggle-button ${fullWidth ? "w-full justify-center" : ""}`;

  return (
    <div className={wrapperClassName}>
      <button
        type="button"
        onClick={toggleTheme}
        className={buttonClassName}
        aria-label="Toggle dark theme"
        aria-pressed={theme === "dark"}
        title={`Switch to ${nextTheme} theme`}
        tabIndex={tabIndex}
      >
        <span className="theme-toggle-icon">
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </span>
        <span className="theme-toggle-label">Theme</span>
        <span className="theme-toggle-value">{theme === "dark" ? "Dark" : "Light"}</span>
      </button>

      <button
        type="button"
        onClick={toggleVisualMode}
        className={buttonClassName}
        aria-label="Toggle sketch style"
        aria-pressed={visualMode === "sketch"}
        title={`Switch to ${nextVisualMode} mode`}
        tabIndex={tabIndex}
      >
        <span className="theme-toggle-icon">
          <PencilIcon />
        </span>
        <span className="theme-toggle-label">Style</span>
        <span className="theme-toggle-value">
          {visualMode === "sketch" ? "Sketch" : "Clean"}
        </span>
      </button>
    </div>
  );
}

export default ThemeToggle;
