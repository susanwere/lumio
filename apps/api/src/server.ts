import { buildApp } from './app.js';
import { readServerConfig } from './config.js';

const app = buildApp({ logger: true });

for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.once(signal, () => {
    void app.close().catch((error: unknown) => {
      app.log.error(error);
      process.exitCode = 1;
    });
  });
}

try {
  await app.listen(readServerConfig(process.env));
} catch (error) {
  app.log.error(error);
  await app.close();
  process.exitCode = 1;
}
