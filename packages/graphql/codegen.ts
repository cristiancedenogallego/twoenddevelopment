
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphql",
  generates: {
    "generated/graphql.ts": {
      plugins: ["typescript"]
    }
  }
};

export default config;
