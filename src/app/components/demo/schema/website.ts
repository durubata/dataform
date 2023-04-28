export const websiteSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  title: 'Website',
  description: 'Open a Website URL',
  properties: {
    name: {
      type: 'string',
      pattern: '^[a-zA-Z_\\-0-9]*$',
      unique: true,
    },
    website: {
      type: 'string',
      title: 'Website',
      format: 'url',
    },
    multiLanguage: {
      type: 'boolean',
      title: 'Multi Language',
    },
    password: {
      type: 'string',
      title: 'Password',
    },
    languages: {
      type: 'array',
      title: 'Languages',
      uniqueItems: true,
      'x-control': 'checkbox',
      items: {
        type: 'string',
      },
      'x-dataSource': {
        type: 'json',
        json: ['en', 'fr', 'de', 'es', 'pt'],
        filter: {},
      },
    },
    icons: {
      type: 'string',
      title: 'Password',
      'x-control': 'icon-picker',
    },
  },
};
