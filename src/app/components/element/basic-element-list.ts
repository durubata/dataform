import { CheckboxInput } from './checkbox';
import { Input } from './input';
import { RadioInput } from './radio';
import { SelectInput } from './select';
import { SliderRangeInput } from './slider-range';

export const basicElementList: { [x: string]: any } = {
  input: Input,
  textarea: Input,
  select: SelectInput,
  slider: SliderRangeInput,
  radio: RadioInput,
  checkbox: CheckboxInput,
};
