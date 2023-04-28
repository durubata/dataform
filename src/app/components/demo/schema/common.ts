export const commonSchema = {
  type: 'object',
  title: 'Common',
  properties: {
    name: {
      type: 'string',
      pattern: '^[a-zA-Z_\\-0-9]*$',
      unique: true,
    },
    image: {
      type: 'string',
      title: 'Image',
      format: 'url',
    },
    design: {
      type: 'string',
      title: 'Website',
      format: 'url',
    },
    social: {
      type: 'array',
      title: 'Social Networks',
      uniqueItems: true,
      'x-control': 'chip', // "multi-checkbox",// "select",
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            title: 'Name',
          },
          url: {
            type: 'string',
            title: 'URL',
            format: 'url',
          },
        },
      },
    },
    fonts: {
      type: 'string',
      title: 'Website',
      format: 'url',
    },
    domain: {
      type: 'string',
      title: 'Domain',
    },
    password: {
      type: 'string',
      title: 'Password',
    },
    analytics: {
      type: 'boolean',
      title: 'Multi Language',
    },
    schedule: {
      type: 'boolean',
      title: 'Multi Language',
    },
    uri: {
      type: 'string',
      title: 'URL Configuration',
    },
    status: {
      type: 'boolean',
      title: 'Multi Language',
    },
    translations: {
      type: 'array',
      title: 'Languages',
      uniqueItems: true,
      'x-control': 'multi-checkbox',
      items: {
        type: 'string',
      },
      'x-dataSource': {
        type: 'json',
        json: ['en', 'fr', 'de', 'es', 'pt'],
        filter: {},
      },
    },
  },
};
