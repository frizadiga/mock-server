import { init } from '@stricjs/app';

function main() {
  init_strictjs();
  monitor_signals();
  monitor_events();
  meta_info();
}

function meta_info() {
  console.log('Bun.main', Bun.main);
  console.log('meta.url', import.meta.url);
  console.log('meta.path', import.meta.path);
}

function init_strictjs() {
  try {
    init({
      routes: ['./src'],
      serve: {
        // port is set via environment variable PORT
        // @ts-expect-error: strictjs typing issue
        tls: {
          key: Bun.file('./.ssl/local.key'),
          cert: Bun.file('./.ssl/local.cert'),
        }
      }
    });
  } catch (error) {
    console.error("Failed to initialize server:", error);
    process.exit(1);
  }
}

function monitor_signals() {
  // SIGKILL cannot be handled
  ['SIGINT', 'SIGTERM'].forEach(signal => {
    process.on(signal, () => {
      console.log(`Received ${signal}`);
      process.exit(0); // Optionally exit gracefully
    });
  });
}

function monitor_events() {
  process.on("exit", (code) => {
    console.log(`Process is exiting with code ${code}`);
  });
}

if (Bun.main === import.meta.path) {
  main();
}
