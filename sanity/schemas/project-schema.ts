import {defineField, defineType} from 'sanity'

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
            name: 'alt',
            title: 'Alt',
            type: 'string'
        }
      ]
    }),
    defineField({
        name: 'destinationCode',
        title: 'Destination Code',
        type: 'url',
    }),
    defineField({
        name: 'destinationDemo',
        title: 'Destination demo',
        type: 'url',
    }),
    defineField({
        name: 'technologies',
        title: 'technologies',
        type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of:[{ type: "block"}],
      })
  ],

  
})
