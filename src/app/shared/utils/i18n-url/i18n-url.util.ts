export class I18nUrl {
  public constructor(
    private readonly langs: ReadonlyArray<string>,
  ) { }

  public getPagePath(fullPath: string): string {
    return fullPath;
  }
}
