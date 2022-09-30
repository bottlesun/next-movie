import SEO from "../../../components/_common/seo";
import useInput from "../../../hooks/useInput";
import {LoginWrap, JoinAs} from "../login/login.style";
import InputComponent from "../../../components/_common/inputComponent";
import router from "next/router";
import {useCallback} from "react";

const Join = () => {
  const {onChange, inputs, onFocus, onBlur} = useInput({id: '', password: '',rePassword:'',nickName:''});
  const {id , password,rePassword,nickName} = inputs;

  const onCompleteJoin = useCallback(() => {
    return router?.push('/user/login');
  },[])
  return (
    <LoginWrap>
      <SEO title={'회원가입'}/>

      <JoinAs>
        회원가입
        <hr/>
      </JoinAs>

      <div className={'login-wrap'}>
        <fieldset>

          <InputComponent title={'아이디'}
                              labelText={'아이디를 입력해주세요'}
                              value={id}
                              name={'id'}
                              onBlur={onBlur}
                              onFocus={onFocus}
                              onChange={onChange}
                              required={true}/>

          <InputComponent title={'닉네임'}
                              labelText={'닉네임을 입력해주세요'}
                              value={nickName}
                              name={'nickName'}
                              onBlur={onBlur}
                              onFocus={onFocus}
                              onChange={onChange}
                              required={true}/>

          <InputComponent title={'비밀번호'}
                          labelText={'4~8 글자를 입력해주세요'}
                          value={password}
                          name={'password'}
                          onBlur={onBlur}
                          onFocus={onFocus}
                          onChange={onChange}
                          required={true}/>

          <InputComponent title={'비밀번호 확인'}
                              labelText={'비밀번호를 다시 입력해주세요'}
                              value={rePassword}
                              name={'RePassword'}
                              onBlur={onBlur}
                              onFocus={onFocus}
                              onChange={onChange}
                              required={true}/>


          <button type='button' onClick={onCompleteJoin}>회원가입</button>

        </fieldset>
      </div>

    </LoginWrap>

  )
}

export default Join;