import {defineConfig, isDev} from 'sanity'
import {schemaTypes} from './schemas'


export default defineConfig({
  name: 'default',
  title: 'sanityexpress',

  projectId: 'eka36j6x',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },
})
