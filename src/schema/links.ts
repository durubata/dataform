import { commonSchema } from './common';

export const linkSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  title: 'Website',
  description: 'Open a Website URL',
  properties: {
    links: {
      type: 'string',
      title: 'Website',
      format: 'url',
    },
    socialNetworks: {
      type: 'string',
      title: 'Website',
      format: 'url',
    },
    ...commonSchema.properties,
  },
};
