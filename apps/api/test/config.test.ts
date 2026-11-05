import { describe, expect, it } from 'vitest';
import { readServerConfig } from '../src/config.js';

describe('server configuration', () => {
  it('defaults to a local server', () => {
    expect(readServerConfig({})).toEqual({ host: '127.0.0.1', port: 3000 });
  });
  it('accepts explicit host and port', () => {
    expect(readServerConfig({ HOST: '0.0.0.0', PORT: '4000' })).toEqual({
      host: '0.0.0.0',
      port: 4000,
    });
  });
  it.each(['', '0', '-1', '65536', '3.5', 'abc', '3e3'])(
    'rejects invalid port %j',
    (PORT) => {
      expect(() => readServerConfig({ PORT })).toThrow('PORT');
    },
  );
  it('rejects an empty host', () => {
    expect(() => readServerConfig({ HOST: ' ' })).toThrow('HOST');
  });
});
