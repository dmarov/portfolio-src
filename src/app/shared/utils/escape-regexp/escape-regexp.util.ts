export const escapeRegexp = (text: string): string =>
  text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
