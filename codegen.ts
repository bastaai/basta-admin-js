
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      ["https://management.api.stage.basta.ai/graphql"]: {
        headers: {
          ['x-api-key']: process.env.TEMP_API_KEY!,
          ['x-account-id']: process.env.TEMP_ACCOUNT_ID!, 
        }
      }
    }
  ],
  generates: {
    './src/gql/generated/': {
      overwrite: true,
      documents: 'src/gql/**/*.gql.ts',
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
    }
 }
};

export default config;
