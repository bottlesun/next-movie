import Link from 'next/link';
import {useCallback} from "react";
import SEO from "../../../components/_common/seo";
import useLoginStore from "../../../stores/loginStores";
import {FindAndJoin, LoginWrap} from "./login.style";
import router from "next/router";
import useInput from "../../../hooks/useInput"

const Login = () => {
  const {setLogin} = useLoginStore();
  const {onChange, inputs, onFocus, onBlur} = useInput({id: '', password: ''});


  const onComplete = useCallback(() => {
    setLogin(true);
    return router?.push('/');
  }, [setLogin]);

  return (
    <LoginWrap>
      <SEO title={'로그인이 필요합니다.'}/>
      <h3 className={'logo'}>
        MOVING
      </h3>
      <div className={'login-wrap'}>
        <fieldset>
          <div className={'login-input'}>
            <label htmlFor="id">아이디 <span>*</span></label>
            <input type="text"
                   id='id'
                   onBlur={onBlur}
                   onFocus={onFocus}
                   onChange={onChange}
                   name={'id'} value={inputs.id}
                   required/>
          </div>

          <div className={'login-input'}>
            <label htmlFor="password">비밀번호 <span>*</span> </label>
            <input type="password"
                   id='password'
                   onBlur={onBlur}
                   onFocus={onFocus}
                   onChange={onChange}
                   name={'password'} value={inputs.password}
                   required/>
          </div>

          <button type='button' onClick={onComplete}>LOGIN</button>

        </fieldset>
      </div>

      <FindAndJoin>
        <ul>
          <li><a href="#">아이디 찾기</a></li>
          <li><a href="#">비밀번호 찾기 </a></li>
        </ul>
        <div className={'join-as'}>
          아직 계정이 없으신가요?
          <Link href={'/user/join'}><a>회원가입하기</a></Link>
        </div>
      </FindAndJoin>

    </LoginWrap>
  )
}

export default Login;
