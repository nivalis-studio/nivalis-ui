const isBrowserLocaleClockType24h = () => {
  const language =
    typeof window === "undefined" ? "en-US" : window.navigator.language;

  const hr = new Intl.DateTimeFormat(language, {
    hour: "numeric",
  }).format();

  return Number.isInteger(Number(hr));
};

export { isBrowserLocaleClockType24h };
