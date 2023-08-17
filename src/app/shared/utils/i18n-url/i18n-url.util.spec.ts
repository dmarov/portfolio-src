import { I18nUrl } from "./i18n-url.util";

describe("I18nUrl", () => {
  let langUrl: I18nUrl;

  beforeEach(() => {
    langUrl = new I18nUrl();
  });

  it('should map "/en" to "/"', () => {
    const fullPath = "/en";

    const pagePath = langUrl.getPagePath(fullPath);

    expect(pagePath).toEqual("/");
  });

  it('should map "/en/products" to "/products"', () => {
    const fullPath = "/en/products";

    const pagePath = langUrl.getPagePath(fullPath);

    expect(pagePath).toEqual("/products");
  });
});
