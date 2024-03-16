import React from 'react';

const schema = {
  title: 'User',
  properties: {
    firstName: {
      type: 'string',
      title: 'First name',
    },
    lastName: {
      type: 'string',
      title: 'Last name',
    },
    email: {
      type: 'string',
      title: 'Email',
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
          title: 'ZIP',
        },
        location: {
          type: 'object',
          title: 'Location',
          properties: {
            latitude: {
              type: 'string',
              title: 'Latitude',
            },
            longitude: {
              type: 'string',
              title: 'Longitude',
            },
          },
        },
      },
    },
  },
};

const arraySchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      'x-control': 'textbox',
    },
    age: {
      type: 'integer',
      title: 'Age',
      'x-control': 'numberbox',
    },
    email: {
      type: 'string',
      title: 'Email',
      format: 'email',
      'x-control': 'textbox',
    },
    hobbies: {
      type: 'array',
      title: 'Hobbies',
      items: {
        type: 'string',
      },
      minItems: 1,
      maxItems: 5,
      uniqueItems: true,
      'x-control': 'multi-select',
    },
    scores: {
      type: 'array',
      title: 'Scores',
      items: {
        type: 'number',
        'x-control': 'numberbox',
      },
      minItems: 3,
      maxItems: 10,
      'x-control': 'numberbox',
    },
  },
  required: ['name', 'age', 'email'],
};
