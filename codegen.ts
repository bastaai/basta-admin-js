import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      [process.env.BASTA_MANAGEMENT_API_URL!]: {
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
    './src/gql/generated/': {
      overwrite: true,
      documents: 'src/gql/**/*.graphql',
      preset: 'client',
      hooks: { afterOneFileWrite: ['prettier --write'] },
    },
  },
};

export default config;
