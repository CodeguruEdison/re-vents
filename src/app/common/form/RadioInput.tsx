
import React, { FC } from 'react'
import {Form} from 'semantic-ui-react'


export interface IRadioInput {
  input :any,
  width:number,
  type:string,
  label:string
}
export const RadioInput:FC<IRadioInput> = (props) => {
     const {input,type,label } = props;
    return (
       <Form.Field>
         <div className="ui radio">
             <input {...input} type={type}/>{' '}
             <label>{label}</label>
         </div>
       </Form.Field>
    )
}

export default RadioInput;