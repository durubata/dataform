export const testSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    test: {
      type: 'string',
      title: 'Last name',
      'x-group': 'group1',
    },
    dropdown: {
      type: 'string',
      enum: ['one', 'two', 'three'],
      'x-group': 'group1',
    },
    radioGroup: {
      type: 'string',
      enum: ['one', 'two', 'three'],
      'x-control': 'radio',
    },
    color: {
      type: 'string',
      'x-control': 'color',
    },
    bio: {
      type: 'string',
      'x-control': 'textarea',
    },
    password: {
      type: 'string',
      'x-control': 'password',
    },
    number: {
      type: 'number',
      'x-control': 'number',
    },
    slider: {
      type: 'number',
      'x-control': 'slider',
    },
    address: {
      type: 'object',
      title: 'Address',
      properties: {
        street: {
          type: 'string',
          title: 'Street',
        },
        city: {
          type: 'string',
          title: 'City',
        },
        state: {
          type: 'string',
          title: 'State',
        },
        zip: {
          type: 'string',
          title: 'Zip',
        },
        country: {
          type: 'string',
          title: 'Country',
        },
      },
    },
    addressLayout: {
      type: 'object',
      title: 'Address',
      layout: {
        type: 'accordion',
        tabs: [
          {
            title: 'Accordion 1',
            properties: {
              street: {
                type: 'string',
                title: 'Street',
              },
            },
          },
          {
            title: 'Accordion 2',
            properties: {
              city: {
                type: 'string',
                title: 'City',
                'x-group': 'a1',
              },
              state: {
                type: 'string',
                title: 'State',
                'x-group': 'a1',
              },
            },
          },
          {
            title: 'Accordion 3',
            properties: {
              zip: {
                type: 'string',
                title: 'Zip',
              },
              country: {
                type: 'string',
                title: 'Country',
              },
            },
          },
        ],
      },
    },
  },
};
