import {JoinTitle} from "../../../styles/login.style";
import {ChangeEvent, FocusEvent} from "react";

export interface JoinInputComponent {
  title : string
  labelText : string
  value : string
  name : string
  onChange : (e:ChangeEvent<HTMLInputElement>) => void
  onBlur : (e: FocusEvent<HTMLInputElement>) => void
  onFocus : (e: FocusEvent<HTMLInputElement>) => void
  required : boolean
}

const InputComponent = ({title , labelText , onBlur , onFocus ,onChange ,value ,name ,required} : JoinInputComponent) => {
  return(
    <JoinTitle>
      <div className={'title'}>{title}</div>
      <div className={'login-input'}>
        <label htmlFor={labelText}>{labelText} <span>*</span></label>
        <input type="text"
               id={name}
               onBlur={onBlur}
               onFocus={onFocus}
               onChange={onChange}
               name={name} value={value}
               required={required}/>
      </div>
    </JoinTitle>
  )
}

export default InputComponent