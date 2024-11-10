// import { $ } from 'bun';
// import { routes } from '@stricjs/app';
import { json, /* status, text */ } from '@stricjs/app/send';
// import path from 'node:path';
import path from 'node:path';

const PATH_TO_MOCKS = '/Users/bytedance/Documents/main/mock-server/mocks';

// determine mock to read
async function find_mock() {
  const mock_filename = 'scroogeRenderPaymentRegister.gql.example.json';
  const mock_path = path.join(PATH_TO_MOCKS, mock_filename);
  // const mock_content = await $`cat ${mock_path}`;
  const mock_content = await Bun.file(mock_path, {}).text();
  const mock_json = JSON.parse(mock_content);

  return mock_json;
}

interface Mock {
  metadata: unknown;
  response: unknown;
}

function normalize_mock(mock: Mock) {
  const normalized_mock = mock?.response;
  return normalized_mock;
}

async function gql_handler() {
  const final_mock = await find_mock();
  const final_mock_normalized = normalize_mock(final_mock);

  return json({ data: final_mock_normalized });
}

export { gql_handler }
