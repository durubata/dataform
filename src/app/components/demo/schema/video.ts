import { commonSchema } from './common';

export const videoSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  title: 'Video',
  description: 'Link to a videos',
  properties: {
    videos: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          url: {
            type: 'string',
            title: 'Video',
            format: 'url',
          },
          title: {
            type: 'string',
            title: 'Title',
          },
          description: {
            type: 'string',
            title: 'Title',
          },
        },
      },
    },
    embed: {
      type: 'boolean',
      title: 'Embed Video',
    },
    autoPlay: {
      type: 'boolean',
      title: 'Auto Play',
    },
    title: {
      type: 'string',
      title: 'Title',
    },
    description: {
      type: 'string',
      title: 'Title',
    },
    ...commonSchema.properties,
  },
};
