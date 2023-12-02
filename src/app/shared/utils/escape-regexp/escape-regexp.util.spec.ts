import { escapeRegexp } from "./escape-regexp.util";

describe("EscapeRegexpUtil", () => {
  it("should keep value without regexp characters the same", () => {
    expect(escapeRegexp("abc")).toEqual("abc");
  });

  it("should escape '-' character", () => {
    expect(escapeRegexp("-")).toEqual("\\-");
  });

  it("should escape '[' character", () => {
    expect(escapeRegexp("[")).toEqual("\\[");
  });

  it("should escape ']' character", () => {
    expect(escapeRegexp("]")).toEqual("\\]");
  });

  it("should escape '{' character", () => {
    expect(escapeRegexp("{")).toEqual("\\{");
  });

  it("should escape '}' character", () => {
    expect(escapeRegexp("}")).toEqual("\\}");
  });

  it("should escape '(' character", () => {
    expect(escapeRegexp("(")).toEqual("\\(");
  });

  it("should escape ')' character", () => {
    expect(escapeRegexp(")")).toEqual("\\)");
  });

  it("should escape '*' character", () => {
    expect(escapeRegexp("*")).toEqual("\\*");
  });

  it("should escape '+' character", () => {
    expect(escapeRegexp("+")).toEqual("\\+");
  });

  it("should escape '?' character", () => {
    expect(escapeRegexp("?")).toEqual("\\?");
  });

  it("should escape '.' character", () => {
    expect(escapeRegexp(".")).toEqual("\\.");
  });

  it("should escape ',' character", () => {
    expect(escapeRegexp(",")).toEqual("\\,");
  });

  it("should escape '\\' character", () => {
    expect(escapeRegexp("\\")).toEqual("\\\\");
  });

  it("should escape '^' character", () => {
    expect(escapeRegexp("^")).toEqual("\\^");
  });

  it("should escape '$' character", () => {
    expect(escapeRegexp("$")).toEqual("\\$");
  });

  it("should escape '|' character", () => {
    expect(escapeRegexp("|")).toEqual("\\|");
  });

  it("should escape '#' character", () => {
    expect(escapeRegexp("#")).toEqual("\\#");
  });

  it("should escape ' ' character", () => {
    expect(escapeRegexp(" ")).toEqual("\\ ");
  });
});
