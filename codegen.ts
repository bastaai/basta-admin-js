import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      ['https://management.api.basta.wtf/graphql']: {
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
    // Generate types for schema and operations
    './src/gql/generated/types.ts': {
      overwrite: true,
      documents: 'gql/**/*.graphql',
      plugins: ['typescript', 'typescript-operations'],
      hooks: { afterOneFileWrite: ['prettier --write'] },
    },
    // Generate raw operations to strings
    './src/gql/generated/operations.ts': {
      overwrite: true,
      documents: 'gql/**/*.graphql',
      plugins: ['codegen-operations-plugin.js'],
      hooks: { afterOneFileWrite: ['prettier --write'] },
    },
  },
};

export default config;
