import React, { FC } from "react";
import PlacesAutoComplete from "react-places-autocomplete";
import { Form, Label, Segment, List } from "semantic-ui-react";

export interface IPlaceInputProps {
  input: any; //SelectHTMLAttributes<WrappedFieldInputProps> ;
  width: string;
  type: string;
  placeholder: string;
  multiple: boolean;
  options: any[];
  meta: IMeta;
  value: any;
  onSelect:()=>void;
}
export interface IMeta {
  touched: boolean;
  error: string;
}

export const PlaceInput: FC<IPlaceInputProps> = props => {
  const {
    input: { value, onChange, onBlur },
    options,
    placeholder,
    meta: { touched, error },
    multiple,
    onSelect
  } = props;

  return (
    <div>
      <PlacesAutoComplete value={value} onChange={onChange} onSelect={onSelect}  >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <Form.Field error={touched && !!error}>
            <input
              placeholder={placeholder}
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input"
              })}
            ></input>
            {touched && error && (
              <Label basic color="red">
                {error}
              </Label>
            )}
            {suggestions.length > 0 && (
              <Segment
                style={{
                  marginTop: 0,
                  position: "absolute",
                  zIndex: 1000,
                  width: "100%"
                }}
              >
                {loading && <div> Loading...</div>}
                <List selection>
                  {suggestions.map(s => (
                    <List.Item {...getSuggestionItemProps(s)}>
                      <List.Header>
                        {s.formattedSuggestion.mainText}
                      </List.Header>
                      <List.Description>
                        {s.formattedSuggestion.secondaryText}
                      </List.Description>
                    </List.Item>
                  ))}
                </List>
              </Segment>
            )}
          </Form.Field>
        )}
      </PlacesAutoComplete>
    </div>
  );
};
