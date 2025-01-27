import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'imgurl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
