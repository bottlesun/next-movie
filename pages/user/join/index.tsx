import SEO from "../../../components/_common/seo";
import useInput from "../../../hooks/useInput";
import {LoginWrap, JoinAs, JoinTitle} from "../login/login.style";

const Join = () => {
  const {onChange, inputs, onFocus, onBlur} = useInput({id: '', password: ''});

  return (
    <LoginWrap>
      <SEO title={'회원가입'}/>

      <JoinAs>
        회원가입
        <hr/>
      </JoinAs>

      <div className={'login-wrap'}>
        <fieldset>
          <JoinTitle>
            <div>아이디</div>
            <div className={'login-input'}>
              <label htmlFor="id">아이디를 입력하세요. <span>*</span></label>
              <input type="text"
                     id='id'
                     onBlur={onBlur}
                     onFocus={onFocus}
                     onChange={onChange}
                     name={'id'} value={inputs.id}
                     required/>
            </div>
          </JoinTitle>

          <JoinTitle>
            <div className={'title'}>비밀번호</div>
            <div className={'login-input'}>
              <label htmlFor="password"> 4~8자의 숫자만 입력하세요.<span>*</span> </label>
              <input type="password"
                     id='password'
                     onBlur={onBlur}
                     onFocus={onFocus}
                     onChange={onChange}
                     name={'password'} value={inputs.password}
                     minLength={4}
                     maxLength={8}
                     required/>
            </div>
          </JoinTitle>

          <button type='button'>회원가입</button>

        </fieldset>
      </div>

    </LoginWrap>

  )
}

export default Join;