export const localize = (key: string, placeholder: string) => {
  const localizations = window.localizations || {};
  return localizations[key] || placeholder;
};
