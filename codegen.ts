import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://laisladelyoga.local/graphql/',
  documents: 'src/queries/*.*',
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
