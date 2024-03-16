import { popularSocialIcons } from "@/assets/socialIcons";
import { formElementTypes } from "../assets/form-elements";
import { formElementSchema } from "./form-element";


export const commonSchema = {
  type: 'object',
  title: 'Common',
  properties: {
    name: {
      type: 'string',
      pattern: '^[a-zA-Z_\\-0-9]*$',
      unique: true,
      'x-layout': 'none',
      'x-label-position': 'top',
    },
    image: {
      type: 'string',
      title: 'Image',
      format: 'url',
      'x-control': 'upload',
    },
    slider: {
      type: 'string',
      title: 'Image',
      max: 1000,
      min: 20,
      step: 10,
      'x-control': 'slider-range',
    },
    design: {
      type: 'string',
      title: 'Website',
      format: 'url',
    },
    socialLinks: {
      type: 'array',
      'x-control': 'social-links',
      name: 'social-links',
      'x-hide-label': true,
      enum: popularSocialIcons.map((item) => ({ 'x-hide-label': true, label: item.title, value: item.title.toLowerCase(), image: `/assets/social/rsq-icon-original-${item.title.toLowerCase()}.svg` })),
      items: {
        type: 'object',
        layout: 'card',
        properties: {
          name: {
            type: 'string',
            title: 'Name',
            'x-hide-label': true,
            readOnly: true,
            'x-group': 'group1',
            'x-image': `{{socialLinks.[].image}}`,
            'x-props': {
              'className': 'w-48'
            }
          },
          url: {
            type: 'string',
            'x-group': 'group1',
            'x-hide-label': true,
            title: 'URL',
            'x-control': 'textbox',
          },
        }
      }
    },
    forms: {
      type: 'array',
      'x-control': 'form-elements',
      name: 'form-elements',
      // 'x-hide-label': true,
      layout: 'collapsible',
      enum: formElementTypes.map((item) => ({ 'x-hide-label': false, label: item.title, value: item.name, icon: item.icon })),
      items: formElementSchema.properties.inputs.items,
    },
    links: {
      type: 'array',
      title: 'Links',
      uniqueItems: true,
      layout: 'collapsible',
      items: {
        type: 'object',
        layout: 'card',
        properties: {
          name: {
            type: 'string',
            title: 'Name2',
            'x-group': 'group1',
            'x- icon': 'TbWorldWww'
          },
          url: {
            type: 'string',
            title: 'URL',
            'x-group': 'group1',
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
    radio: {
      type: 'string',
      'x-control': 'radio',
      enum: [{ value: 'www', label: 'WWW', icon: 'RiBoxingLine' }, { value: 'ufc', label: 'ufc', icon: 'SiUfc' }, { value: 'boxing', label: 'Boxing', icon: 'GiBoxingGlove' }],
    },
    checkbox: {
      type: 'string',
      'x-control': 'checkbox',
      enum: ['www', 'www2', 'www3'],
      description: 'Select one or more options.',
      'x-help-text': 'Select one or more options.',
      'x-error-text': 'You must select at least one option.',
      'x-label-position': 'top',
    },
    checkboxArray: {
      type: 'array',
      title: 'Timeslots',
      'x-control': 'checkbox',
      maxItems: 2,
      uniqueItems: true,
      enum: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
      items: {
        type: 'string',
      },
    },
    languages: {
      type: 'array',
      title: 'Languages',
      uniqueItems: true,
      'x-control': 'checkbox',
      maxItems: 1,
      items: {
        type: 'string',
      },
      'x-dataSource': {
        type: 'json',
        value: ['en', 'fr', 'de', 'es', 'pt'],
        filter: {},
      },
    },
    editor: {
      type: 'string',
      'x-control': 'html-editor',
    },
    toggle: {
      type: 'string',
      'x-control': 'toggle',
    },
    select: {
      type: 'string',
      'x-control': 'select',
      enum: ['www', 'www2', 'www3'],
      'x-multiple': true
    },
    domain: {
      type: 'string',
      'x-control': 'select',
      enum: ['www', 'www2', 'www3'],
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
      'x-control': 'select',
      items: {
        type: 'string',
      },
      'x-dataSource': {
        type: 'json',
        value: ['en', 'fr', 'de', 'es', 'pt'],
        filter: {},
      },
    },
  },
};
