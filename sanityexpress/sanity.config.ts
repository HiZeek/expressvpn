import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

  const devOnlyPlugins = [deskTool(), visionTool()]

export default defineConfig({
  name: 'default',
  title: 'sanityexpress',

  projectId: 'eka36j6x',
  dataset: 'production',

  plugins: [
    // ... your other plugins here ...
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
