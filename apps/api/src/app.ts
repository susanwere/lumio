import Fastify, { type FastifyServerOptions } from 'fastify';
import type { HealthResponse } from '@lumio/shared';

export function buildApp(options: FastifyServerOptions = {}) {
  const app = Fastify(options);

  app.get<{ Reply: HealthResponse }>(
    '/health',
    {
      schema: {
        response: {
          200: {
            type: 'object',
            additionalProperties: false,
            required: ['status'],
            properties: { status: { type: 'string', const: 'ok' } },
          },
        },
      },
    },
    async () => ({ status: 'ok' }),
  );

  return app;
}
