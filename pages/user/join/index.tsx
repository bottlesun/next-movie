import SEO from "../../../components/_common/seo";
import useInput from "../../../hooks/useInput";
import {LoginWrap, JoinAs} from "../login/login.style";
import InputComponent from "../../../components/_common/inputComponent";
import {useCallback, useState} from "react";
import CommonModal from "../../../components/_modal/commonModal";

const Join = () => {
  const {onChange, inputs, onFocus, onBlur} = useInput({id: '', password: '', rePassword: '', nickName: ''});
  const {id, password, rePassword, nickName} = inputs;
  const [modalOpen, setModalOpen] = useState(false);

  const onCompleteJoin = useCallback(() => {
    setModalOpen(true);
  }, [])
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

      {
        modalOpen &&
        <CommonModal text={'회원가입 완료 되었습니다.'} buttonChildren={'확인'}
                     modalOpen={modalOpen} setModalOpen={setModalOpen}
                     url={'/user/login'}/>
      }

    </LoginWrap>

  )
}

export default Join;