import React, { FC } from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface IMeta {
  touched: boolean;
  error: string;
}
export interface IDateInputProps {
  input: any; //SelectHTMLAttributes<WrappedFieldInputProps> ;
  width: string;
  type: string;
  placeholder: string;
  multiple: boolean;
  options: any[];
  meta: IMeta;
  value: any;
  [x: string]: any;
}
export const DateInput: FC<IDateInputProps> = props => {
  const {
    input,
    type,
    rows,
    placeholder,
    meta: { touched, error },
    ...rest
  } = props;

  return (
    <div>
      <Form.Field error={touched && !!error}>
        <DatePicker
          className="dateInput"
          {...rest}
          placeholderText={placeholder}
          selected={input.value ? new Date(input.value) : null}
          onChange={input.onChange}
          onBlur={input.Blur}
          dateFormat="dd LLLL yyyy h:mm a"
          timeFormat="HH:mm"
          showTimeSelect
          onChangeRaw={e => e.preventDefault()}
        ></DatePicker>

        {touched && error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
      </Form.Field>
    </div>
  );
};

export default DateInput;
