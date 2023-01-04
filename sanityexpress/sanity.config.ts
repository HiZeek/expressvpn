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

// import {defineConfig} from 'sanity'
// import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

// export default defineConfig({
//   name: 'default',
//   title: 'sanitymedium',

//   projectId: 'eka36j6x',
//   dataset: 'production',

//   plugins: [deskTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })
