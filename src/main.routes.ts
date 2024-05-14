import { routes } from '@stricjs/app';
import { text, json, status } from '@stricjs/app/send';
import { gql_handler } from './gql.handler';

function() {
  return routes()
    .get('/', () => text('Welcome to Stric!'))
    // .post('/json', ctx => ctx.json().then(json));
    // .post('/graphql', () => json({ status: 200, data: 'tai' }));
    .post('/graphql', gql_handler);
}

export default routes;

