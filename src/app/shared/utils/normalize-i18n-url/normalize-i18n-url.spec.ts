import { normalizeI18nUrl } from "./normalize-i18n-url";

describe("I18nUrl", () => {
  it('should map "/en" to "/"', () => {
    const fullPath = "/en";

    const pagePath = normalizeI18nUrl(fullPath);

    expect(pagePath).toEqual("/");
  });

  it('should map "/en/products" to "/products"', () => {
    const fullPath = "/en/products";

    const pagePath = normalizeI18nUrl(fullPath);

    expect(pagePath).toEqual("/products");
  });
});
