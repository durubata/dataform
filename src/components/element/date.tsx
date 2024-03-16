import React, { useEffect, useState } from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { format } from 'date-fns';

export function DatePicker(props) {
  const [date, setDate] = useState(props.value);

  const onChange = (nValue) => {
    let fDate;
    if (props.format === 'date') {
      fDate = format(nValue[0], 'yyyy-MM-dd')
    } else if (props.format === 'time') {
      fDate = format(nValue[0], 'HH:mm:ss')
    } else {
      fDate = nValue[0].toISOString()
    }
    props.onChange({ target: { value: fDate } })
    setDate(nValue)
  }

  return (
    <Flatpickr
      {...props}
      onChange={onChange}
      enableTime={props.format === 'time'}
      value={date}
    />
  );
}
