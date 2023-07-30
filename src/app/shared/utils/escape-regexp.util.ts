export const escapeRegexp = (text: string) =>
  text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
