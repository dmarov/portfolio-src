import { I18nUrl } from './i18n-url.util';

describe('I18nUrl', () => {
  let langUrl: I18nUrl;

  beforeEach(() => {
    langUrl = new I18nUrl(['en', 'ru']);
  });

  it('should map "/en" to "/"', () => {
    const fullPath = '/en';

    const pagePath = langUrl.getPagePath(fullPath);

    expect(pagePath).toEqual('/');
  });
});
