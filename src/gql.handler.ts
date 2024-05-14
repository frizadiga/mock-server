import { $ } from 'bun';
// import { routes } from '@stricjs/app';
import { text, json, status } from '@stricjs/app/send';

async function gql_handler() {
    // const res = await $`cat /Users/bytedance/mock-server/mocks/case-1.json`;
    const res = await Bun.file('/Users/bytedance/mock-server/mocks/case-1.json', {}).text();
	  // console.log(res);
    return json({ status: 200, data: JSON.parse(res) });
}

// Define and export your routes
// export default routes()
//    .get('/', () => text('Welcome to Stric!'))
//    // .post('/json', ctx => ctx.json().then(json));
//    .post('/graphql', () => json({ status: 200, data: 'tai' }));
//    .post('/graphql', () => json({ status: 200, data: 'tai' }));

export { gql_handler }
