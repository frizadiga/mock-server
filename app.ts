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
  // initialize and serve
  init({
    routes: ['./src'],
    // Bun.serve opt 
    serve: {
      // port: 8080, // set port moved to environment variable `PORT`
      // @ts-ignore // strictjs typing issue
      tls: {
        key: Bun.file('./.ssl/local.key'),
        cert: Bun.file('./.ssl/local.cert'),
      }
    }
  });
}

function monitor_signals() {
  ['SIGINT', 'SIGTERM', 'SIGKILL'].forEach(signal => {
    process.on(signal, () => {
      console.log(`Received ${signal}`);
    });
  });
}

function monitor_events() {
  // process.on("beforeExit", (code) => {
  //   console.log(`Event loop is empty!!`);
  // });

  process.on("exit", (code) => {
    console.log(`Process is exiting with code ${code}`);
  });
}

main();
