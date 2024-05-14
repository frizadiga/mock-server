import { init } from '@stricjs/app';

// initialize and serve the application with a concise syntax
init({
  routes: ['./src'],
  // Bun.serve opt 
  serve: {
    // port: 8080, // set port moved to environment variable `PORT`
    // @ts-ignore // strict js typing issue
    tls: {
      // key: Bun.file('./.ssl/server.key'),
      // cert: Bun.file('./.ssl/server.cert'),
      key: Bun.file('./.ssl/dev.tokopedia.com-key.pem'),
      cert: Bun.file('./.ssl/dev.tokopedia.com.pem'),
    }
  }
});
