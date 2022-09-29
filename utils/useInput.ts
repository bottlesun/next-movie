import {ChangeEvent, FocusEvent, useCallback, useState} from "react";
import useLoginStore from "../stores/loginStores";


function useInput() {
  const [inputs, setInputs] = useState({id: '', password: ''});
  const {id, password} = inputs;


  const onFocus = useCallback((e: FocusEvent) => {
    const target = e.target as HTMLInputElement;
    if (target) target?.parentElement?.classList.add('on');
  }, [inputs]);

  const onBlur = useCallback((e: FocusEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value === '') target?.parentElement?.classList.remove('on');
  }, [inputs]);

  const onChange = useCallback((e: ChangeEvent) => {
    const {value, name} = e.target as HTMLInputElement;
    setInputs(
      {
        ...inputs,
        [name]: value
      }
    )
  }, [inputs]);

return {onChange,onBlur,onFocus}
}