import { RiUserHeartLine } from 'react-icons/ri'

export default {
  name: 'selfcareTechnique',
  title: 'Self-Care Technique',
  type: 'document',
  icon: RiUserHeartLine,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'selfcareCategory' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'videoFile',
      title: 'Upload Video',
      type: 'fileType',
      accept: '.mp4',
    },
    {
      name: 'videoLink',
      title: 'Link to Video',
      type: 'url',
      validation: Rule =>
        Rule.custom(url => {
          if (typeof url === 'undefined') {
            return true // Allow undefined values
          }
          return (
            url.startsWith('https://youtube.com/embed/') ||
            'Not a valid embed URL'
          )
        }),
      description:
        "To upload a YouTube video, go to the video on YouTube, click 'Share', then 'Embed' and copy the url from the codeblock. It should start with 'https://youtube.com/embed/'",
    },
    {
      name: 'audio',
      title: 'Audio',
      type: 'fileType',
      accept: '.mp3, .ogg, .wav',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'likes',
      title: 'Number of likes',
      type: 'number',
      readOnly: 'true',
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'comment' } }],
    },
  ],
}
