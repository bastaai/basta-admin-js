import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      ['https://management.api.stage.basta.ai/graphql']: {
        headers: {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          ['x-api-key']: process.env.TEMP_API_KEY!,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          ['x-account-id']: process.env.TEMP_ACCOUNT_ID!,
        },
      },
    },
  ],
  generates: {
    './gql/generated/': {
      overwrite: true,
      documents: 'gql/**/*.gql.ts',
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
    },
  },
};

export default config;
