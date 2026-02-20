import { describe, it, expect } from 'vitest';

import { buildFullUrl } from '@api/helpers/buildFullUrl.helper';

describe('buildFullUrl', () => {
  const baseUrl = 'https://api.example.com';

  it('appends path without leading slash to base URL', () => {
    expect(buildFullUrl(baseUrl, 'user')).toBe('https://api.example.com/user');
  });

  it('appends path with leading slash to base URL', () => {
    expect(buildFullUrl(baseUrl, '/user')).toBe('https://api.example.com/user');
  });

  it('removes trailing slash from base URL before appending path', () => {
    expect(buildFullUrl('https://api.example.com/', '/user')).toBe(
      'https://api.example.com/user',
    );
  });

  it('returns full URL unchanged when pathOrUrl is absolute http URL', () => {
    const full = 'http://other.example.com/foo';

    expect(buildFullUrl(baseUrl, full)).toBe(full);
  });

  it('returns full URL unchanged when pathOrUrl is absolute https URL', () => {
    const full = 'https://other.example.com/foo';

    expect(buildFullUrl(baseUrl, full)).toBe(full);
  });

  it('trims whitespace from path before building URL', () => {
    expect(buildFullUrl(baseUrl, '  /user  ')).toBe(
      'https://api.example.com/user',
    );
  });
});
