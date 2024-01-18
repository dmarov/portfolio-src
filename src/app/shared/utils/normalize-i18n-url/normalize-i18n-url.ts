export const normalizeI18nUrl = (fullPath: string): string => {
  const pos = fullPath.replace(/^\//, "").indexOf("/");

  if (pos === -1 || pos === fullPath.length - 1) {
    return "/";
  }

  return fullPath.substring(pos + 1, fullPath.length);
};
