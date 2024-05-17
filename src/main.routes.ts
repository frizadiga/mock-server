import { routes } from '@stricjs/app';
import { text, json, status } from '@stricjs/app/send';
import { gql_handler } from './gql.handler';

function _routes() {
  const _r = routes();
	_r.get('/', () => text('Welcome to Stric! #0'));
	_r.post('/graphql', gql_handler);

	return _r;
}

const M = _routes();
export default M;

