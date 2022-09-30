import {ChangeEvent, FocusEvent, useCallback, useState ,Dispatch, SetStateAction} from "react";

interface ReturnType<T>{
  onChange : (e:ChangeEvent<HTMLInputElement>) => void
  onBlur : (e: FocusEvent<HTMLInputElement>) => void
  onFocus : (e: FocusEvent<HTMLInputElement>) => void
  inputs : T
}

export default function useInput<T>(initialData: T): ReturnType<T> {

  const [inputs, setInputs] = useState(initialData);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setInputs(
      {
        ...inputs,
        [name]: value
      }
    )
  }, [inputs]);

  const onFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target) target?.parentElement?.classList.add('on');
  }, []);

  const onBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.value === '') target?.parentElement?.classList.remove('on');
  }, []);

  return {onChange, onBlur, onFocus, inputs}
};