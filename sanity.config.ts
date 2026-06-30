'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
// قمنا بتغيير الاستيراد هنا إلى deskTool
import {deskTool} from 'sanity/desk'

import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    // وهنا قمنا بتغييرها في البلاجنز
    deskTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})