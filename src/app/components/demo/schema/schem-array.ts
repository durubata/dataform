export const schemaArray = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      title: 'First name',
      'x-group': 'group1',
      'x-icon': 'MdOutlinePeopleAlt',
      'x-props': {
        placeholder: 'First name',
        class: 'tw-input',
      },
    },
    lastName: {
      type: 'string',
      title: 'Last name',
      'x-group': 'group1',
    },
    name: {
      type: 'string',
      title: 'Name',
    },
    age: {
      type: 'integer',
      title: 'Age',
      'x-control': 'numberbox',
    },
    height: {
      type: 'integer',
      title: 'Height',
      'x-control': 'slider',
    },
    hasBabry: {
      type: 'integer',
      'x-group': 'groupb',
      title: 'hasBaby',
      'x-control': 'switch',
    },
    textCheck: {
      type: 'integer',
      title: 'hasBaby',
      'x-group': 'groupb',
      'x-control': 'checkbox',
    },
    email: {
      type: 'string',
      title: 'Email',
      format: 'email',
      'x-control': 'textbox',
    },
    adult: {
      type: 'boolean',
      title: 'Adult',
      'x-control': 'checkbox',
    },
    comments: {
      type: 'string',
      'x-component': 'textarea',
      'x-control': 'textbox',
    },
    address: {
      type: 'array',
      title: 'Address',
      items: {
        type: 'object',
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
        },
        required: ['street', 'city', 'state', 'zip'],
      },
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
      },
      minItems: 3,
      maxItems: 10,
      'x-control': 'multi-numberbox',
    },
    group: {
      title: 'Group with Tabs',
      layout: {
        type: 'tabs',
        tabs: [
          {
            title: 'Tab 1',
            properties: {
              input1: {
                title: 'Input 1',
                type: 'string',
                'x-control': 'radio',
              },
            },
          },
          {
            title: 'Tab 2',
            properties: {
              input2: {
                title: 'Input 2',
                type: 'string',
              },
              input4: {
                title: 'Input 2',
                type: 'string',
              },
            },
          },
        ],
      },
    },
    groupAccordion: {
      title: 'Group with Accordion',
      layout: {
        type: 'accordion',
        tabs: [
          {
            title: 'Accordion 1',
            properties: {
              input1: {
                title: 'Input 1',
                type: 'string',
              },
            },
          },
          {
            title: 'Accordion 2',
            properties: {
              input2: {
                title: 'Input 2',
                type: 'string',
              },
              input4: {
                title: 'Input 2',
                type: 'string',
              },
            },
          },
        ],
      },
    },
    groupSlider: {
      title: 'Group with Slider',
      layout: {
        type: 'accordion',
        tabs: [
          {
            title: 'Slide1 1',
            properties: {
              input1: {
                title: 'Input 1',
                type: 'string',
              },
            },
          },
          {
            title: 'Slide 2',
            properties: {
              input2: {
                title: 'Input 2',
                type: 'string',
              },
              input4: {
                title: 'Input 2',
                type: 'string',
              },
            },
          },
          {
            title: 'Slide 3',
            properties: {
              input2: {
                title: 'Input 2',
                type: 'string',
              },
              input4: {
                title: 'Input 2',
                type: 'string',
              },
            },
          },
        ],
      },
    },
    car: {
      title: 'Car Selection',
      type: 'object',
      properties: {
        maker: {
          type: 'string',
          title: 'Maker',
          enum: ['Toyota', 'Honda', 'Ford'],
        },
        model: {
          type: 'string',
          title: 'Model',
        },
        year: {
          type: 'integer',
          title: 'Year',
        },
        score: {
          type: 'array',
          title: 'Scores',
          items: {
            type: 'number',
          },
          minItems: 3,
          maxItems: 10,
          'x-control': 'multi-numberbox',
        },
      },
      dependencies: {
        model: ['maker'],
        year: ['model'],
      },
    },
    complexForm: {
      title: 'Complex Form',
      type: 'object',
      properties: {
        interests: {
          type: 'array',
          format: 'multiselect',
          title: 'Interests',
          items: {
            type: 'string',
            enum: ['Sports', 'Music', 'Travel', 'Reading'],
          },
        },
        country: {
          type: 'string',
          title: 'Country',
          enum: ['United States', 'Canada'],
        },
        state: {
          type: 'string',
          title: 'State',
        },
        city: {
          type: 'string',
          title: 'City',
        },
      },
      dependencies: {
        state: ['country'],
        city: ['state'],
      },
    },
    match: {
      title: 'Registration Form',
      type: 'object',
      properties: {
        email: {
          type: 'string',
          title: 'Email',
          format: 'email',
        },
        password: {
          type: 'string',
          title: 'Password',
          minLength: 8,
        },
        confirmPassword: {
          type: 'string',
          title: 'Confirm Password',
          'x-matchField': 'password',
        },
      },
    },
    displayCondition: {
      title: 'Example Form',
      type: 'object',
      properties: {
        option: {
          type: 'string',
          title: 'Option',
          enum: ['Download Only', 'Physical Delivery'],
        },
        address: {
          type: 'string',
          title: 'Address',
          'x-displayIf': {
            field: 'option',
            condition: 'notEquals',
            value: 'Download Only',
          },
        },
      },
    },
    allergies: {
      title: 'Allergies',
      type: 'array',
      format: 'multiselect',
      'x-control': 'toggle-group',
      items: {
        type: 'string',
        enum: ['Sports', 'Music', 'Travel', 'Reading'],
      },
    },
  },
  required: ['name', 'age', 'email', 'address'],
};
