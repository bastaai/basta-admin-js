
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      ["https://management.api.stage.basta.ai/graphql"]: {
        headers: {
          ['x-api-key']: "ug981jDsMxjhWMtS2wPP46dQnREUxo0Gj8zTjTI4-zI=",
          ['x-account-id']: "49d64cf0-a5e9-49dd-bb1f-4c3a05bf9e3b", 
        }
      }
    }
  ],
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-document-nodes"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
