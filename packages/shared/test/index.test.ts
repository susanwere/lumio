import { expectTypeOf, it } from 'vitest';
import type { HealthResponse } from '../src/index.js';

it('defines the health response contract', () => {
  expectTypeOf<HealthResponse>().toEqualTypeOf<{ status: 'ok' }>();
  // @ts-expect-error Unsupported health states must not satisfy the contract.
  const invalid: HealthResponse = { status: 'unavailable' };
  void invalid;
  // @ts-expect-error A health response must include its status.
  const missing: HealthResponse = {};
  void missing;
});
