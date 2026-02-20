import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { FetchHttpClient } from '@api/httpClient/httpClient';

describe('FetchHttpClient', () => {
  const baseUrl = 'https://api.example.com';
  let mockFetch: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockFetch = vi.fn();
    vi.stubGlobal('fetch', mockFetch);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('get', () => {
    it('builds full URL from baseUrl and path and returns parsed JSON', async () => {
      const payload = { premium: true };
      mockFetch.mockResolvedValue({
        status: 200,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: () => Promise.resolve(payload),
        text: () => Promise.resolve(JSON.stringify(payload)),
      });

      const client = new FetchHttpClient(baseUrl);
      const result = await client.get<{ premium: boolean }>({ url: '/user' });

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.example.com/user',
        expect.objectContaining({
          method: 'GET',
        }),
      );
      expect(result.data).toEqual(payload);
      expect(result.status).toBe(200);
      expect(result.headers).toBeDefined();
    });

    it('passes AbortSignal and headers when provided', async () => {
      const controller = new AbortController();
      mockFetch.mockResolvedValue({
        status: 200,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: () => Promise.resolve({}),
        text: () => Promise.resolve('{}'),
      });

      const client = new FetchHttpClient(baseUrl);
      await client.get({
        url: '/user',
        config: {
          signal: controller.signal,
          headers: { 'X-Custom': 'value' },
        },
      });

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.example.com/user',
        expect.objectContaining({
          method: 'GET',
          signal: controller.signal,
          headers: { 'X-Custom': 'value' },
        }),
      );
    });
  });
});
