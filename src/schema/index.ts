import { businessSchema } from './business';
import { commonSchema } from './common';
import { dropdown } from './dropdown';
import { linkSchema } from './links';
import { schemaArray } from './schem-array';
import { testSchema } from './test';
import { videoSchema } from './video';
import { websiteSchema } from './website';
import { dataSourceSchema } from './datasource';
import { iconSelectSchema } from './iconselect';

export const schemaStore: any = {};

export const getSchema = (name: any) => {
  return schemaStore[name] || {};
};

schemaStore['website'] = websiteSchema;
schemaStore['links'] = linkSchema;
schemaStore['dataSourceSchema'] = dataSourceSchema;
schemaStore['iconSelectSchema'] = iconSelectSchema;
schemaStore['video'] = videoSchema;
schemaStore['business'] = businessSchema;
schemaStore['common'] = commonSchema;
schemaStore['schema-array'] = schemaArray;
schemaStore['dropdown'] = dropdown;
schemaStore['test'] = testSchema;
