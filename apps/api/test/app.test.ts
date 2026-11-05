import { afterEach, describe, expect, it } from 'vitest';
import { buildApp } from '../src/app.js';

describe('API', () => {
  const app = buildApp();
  afterEach(async () => {
    await app.close();
  });

  it('returns the health contract', async () => {
    const response = await app.inject({ method: 'GET', url: '/health' });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(response.json()).toEqual({ status: 'ok' });
  });
});

it('returns 404 for unknown routes', async () => {
  const app = buildApp();
  try {
    expect(
      (await app.inject({ method: 'GET', url: '/missing' })).statusCode,
    ).toBe(404);
  } finally {
    await app.close();
  }
});
