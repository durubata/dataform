import { commonSchema } from './common';

export const businessSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  title: 'Business',
  description: 'Showcase your business',
  properties: {
    logo: {
      type: 'string',
      title: 'Logo',
      format: 'url',
    },
    company: {
      type: 'string',
      title: 'Company',
    },
    title: {
      type: 'string',
      title: 'Title',
    },
    subTitle: {
      type: 'string',
      title: 'Sub Title',
    },
    buttons: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          label: {
            type: 'string',
            title: 'Label',
          },
          url: {
            type: 'string',
            title: 'URL',
            format: 'url',
          },
        },
      },
    },
    openingHours: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          day: {
            type: 'string',
            title: 'Day',
          },
          from: {
            type: 'string',
            title: 'From',
          },
          to: {
            type: 'string',
            title: 'To',
          },
        },
      },
    },
    locations: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            title: 'Name',
          },
          address: {
            type: 'string',
            title: 'Address',
          },
          phone: {
            type: 'string',
            title: 'Phone',
          },
          email: {
            type: 'string',
            title: 'Email',
          },
          website: {
            type: 'string',
            title: 'Website',
            format: 'url',
          },
          coordinate: {
            type: 'object',
            title: 'Coordinate',
            properties: {
              latitude: {
                type: 'number',
                title: 'Latitude',
              },
              longitude: {
                type: 'number',
                title: 'Longitude',
              },
            },
          },
        },
      },
    },
    ...commonSchema.properties,
  },
};
