import {ChangeEvent, FocusEvent, useCallback, useState} from "react";
import {useInputInterface} from "../interfaces/useInput.interfases";

export function useInput({initialForm}: useInputInterface) {
  const [inputs, setInputs] = useState({initialForm: initialForm});

  const onChange = useCallback((e: ChangeEvent) => {
    const {value, name} = e.target as HTMLInputElement;
    setInputs(
      {
        ...inputs,
        [name]: value
      }
    )
  }, [inputs]);

  const onFocus = useCallback((e: FocusEvent) => {
    const target = e.target as HTMLInputElement;
    if (target) target?.parentElement?.classList.add('on');
  }, []);

  const onBlur = useCallback((e: FocusEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value === '') target?.parentElement?.classList.remove('on');
  }, []);


  return {onChange, onBlur, onFocus, inputs}
}