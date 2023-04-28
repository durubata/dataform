export const dataSourceSchema = {
  type: 'object',
  properties: {
    selectedCourse: {
      name: 'selectedCourse',
      title: 'Selected Course',
      type: 'array',
      uniqueItems: true,
      'x-dataSource': 'courseCollection',
      'x-control': 'picker',
      'x-filters': {
        level: 200,
        major: 'biology',
      },
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          points: {
            type: 'number',
          },
        },
      },
    },
    countryRef: {
      type: 'string',
      $ref: 'countries.json',
    },
    countryURL: {
      type: 'string',
      'x-enum': {
        datasource: 'https://example.com/countries.json',
      },
    },
    food_allergies: {
      type: 'array',
      uniqueItems: true,
      items: {
        type: 'string',
        enum: [
          'Peanuts',
          'Tree nuts',
          'Milk',
          'Eggs',
          'Fish',
          'Shellfish',
          'Soy',
          'Wheat',
        ],
      },
    },
    car_make: {
      type: 'object',
      properties: {
        brand: { type: 'string' },
        model: { type: 'string' },
      },
    },
  },
};

//use array from another property as enum   : {{data.courseCollection}}
