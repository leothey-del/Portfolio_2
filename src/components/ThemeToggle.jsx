const ThemeToggle = ({ theme, onToggle, hideCharacter = false }) => {
  const isDark = theme === 'dark';

  return (
    <div className="theme-toggle-group">
      <span
        className={`theme-toggle-character ${hideCharacter ? 'is-hidden' : ''}`}
        aria-hidden="true"
      />
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        onClick={onToggle}
        className={`theme-toggle ${isDark ? 'is-dark' : 'is-light'}`}
      >
        <svg className="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
          <g className="theme-toggle-sun">
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 1.5v3M12 19.5v3M4.57 4.57l2.12 2.12m10.62 10.62 2.12 2.12M1.5 12h3m15 0h3M4.57 19.43l2.12-2.12M17.31 6.69l2.12-2.12" />
          </g>
          <path
            className="theme-toggle-moon"
            d="M19.7 15.1A8.3 8.3 0 0 1 8.9 4.3 8.6 8.6 0 1 0 19.7 15.1Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ThemeToggle;
