import Link from 'next/link';
import {useCallback, useState} from "react";
import SEO from "../../../components/_common/seo";
import useLoginStore from "../../../stores/loginStores";
import {FindAndJoin, LoginWrap} from "./login.style";
import router from "next/router";
import useInput from "../../../hooks/useInput"
import InputComponent from "../../../components/_common/inputComponent";
import CommonModal from "../../../components/_modal/commonModal";

const Login = () => {
  const {setLogin} = useLoginStore();
  const {onChange, inputs, onFocus, onBlur} = useInput({id: '', password: ''});
  const [modalOpen, setModalOpen] = useState(true);

  const {id, password} = inputs

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
          <InputComponent title={''}
                          labelText={'아이디'}
                          value={id}
                          name={'id'}
                          onBlur={onBlur}
                          onFocus={onFocus}
                          onChange={onChange}
                          required={true}/>

          <InputComponent title={''}
                          labelText={'비밀번호'}
                          value={password}
                          name={'password'}
                          onBlur={onBlur}
                          onFocus={onFocus}
                          onChange={onChange}
                          required={true}/>


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

      {
        modalOpen &&
        <CommonModal children={'회원가입 완료 되었습니다.'} buttonChildren={'확인'}
                     modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      }

    </LoginWrap>
  )
}

export default Login;
