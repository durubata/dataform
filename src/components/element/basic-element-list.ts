import { CheckboxInput } from './checkbox';
import { FileUploadInput } from './file-upload';
import { Input } from './input';
import { RadioInput } from './radio';
import { SelectInput } from './select';
import { IconPicker } from './icon-picker';
import { SliderRangeInput } from './slider-range';
import { SliderInput } from './slider';
import { SwitchInput } from './switch';
import { CommonColorPicker } from './color';
import { DatePicker } from './date';
import { Textarea } from './textarea';
import { CodeBlock } from './code-block';
import { ParagraphBlock } from './paragraph';
import { MapInput } from './map';
import { RatingInput } from './rating';
import { RankingInput } from './ranking';
import { DateInput } from './date-input';
import { LegalConsentForm } from './legal-concent';
import { MatrixInput } from './matrix';
import { FilePicker } from './file-picker';
import { StyleInput } from './style';
// import { NOSSRHTMLEditor } from './html-editor/no-ssr-editor';

export const basicElementList: { [x: string]: any } = {
  input: Input,
  textarea: Textarea,
  'code-block': CodeBlock,
  'html-editor': Textarea,
  select: SelectInput,
  radio: RadioInput,
  slider: SliderInput,
  'slider-range': SliderRangeInput,
  checkbox: CheckboxInput,
  file: FileUploadInput,
  'file-picker': FilePicker,
  upload: FileUploadInput,
  'icon-picker': IconPicker,
  switch: SwitchInput,
  'boolean': SwitchInput,
  color: CommonColorPicker,
  date: DatePicker,
  'date-input': DateInput,
  'date-time': DatePicker,
  'time': DatePicker,
  'paragraph': ParagraphBlock,
  'map': MapInput,
  'rating': RatingInput,
  'ranking': RankingInput,
  'matrix': MatrixInput,
  'legal-consent': LegalConsentForm,
  'style': StyleInput,
};
