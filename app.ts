import { init } from '@stricjs/app';

// Initialize and serve the application with a concise syntax
init({
  routes: ['./src'],
  // Configuration for Bun.serve
  serve: {
    // port: 8080 // set from environment variable `PORT`
  }
});
