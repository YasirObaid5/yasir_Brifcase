import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'
// import post from "./sanity/schemas/post-schema"
// import project from "./sanity/schemas/project-schema"
import schemas from './sanity/schemas'

export default defineConfig({
//   name: 'default',
  title: 'yasir',
  projectId: '69843yax',
  dataset: 'production',
  apiVersion: "2023-03-04",
  basePath:"/admin",

  plugins: [deskTool()],
  schema: {types: schemas}

//   schema: {
//     types: schemaTypes,
//   },
})