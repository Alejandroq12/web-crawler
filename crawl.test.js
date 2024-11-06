import { describe, test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl";

describe('Normalized urls', () => {
  test('Return normalized url protocol', () => {
    expect(normalizeURL('https://blog.boot.dev/path')).toBe('blog.boot.dev/path');
  })

  test('Return normalized url protocol with slash', () => {
    expect(normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path');
  })

  test('Return normalized url with capitals', () => {
    expect(normalizeURL('https://BLOG.BOOT.dev/path/')).toBe('blog.boot.dev/path');
  })

  test('Return normalized url HTTP protocol', () => {
    expect(normalizeURL('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path');
    expect(normalizeURL('http://blog.boot.dev/path')).toBe('blog.boot.dev/path');
  })
})