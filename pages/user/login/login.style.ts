import styled from '@emotion/styled';

export const LoginWrap = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 100%;
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;
    cursor: default;
  }

  .login-wrap {
    width: 100%;
    min-width: 320px;
    max-width: 400px;

    max-height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;

    fieldset {
      border: none;
      width: 100%;


      .login-input {
        margin-bottom: 30px;
        position: relative;

        label {
          width: 100px;
          display: block;
          margin-bottom: 10px;
          position: absolute;
          top: 50%;
          left: 15px;
          transform: translateY(-50%);
          font-size: 12px;
          transition: 0.4s;

          span {
            font-size: 8px;
            color: #ed4337;
          }
        }

        input {
          width: 100%;
          height: 40px;
          background: none;
          padding: 15px 15px 3px;
          border: 1px solid #ffffff;
          border-radius: 6px;

          &:focus {
            outline: none;
          }
        }

        &.on {
          label {
            top: 25%;
            font-size: 8px;
            opacity: 0.8;
          }
        }
      }

      button {
        width: 100%;
        height: 40px;
        border-radius: 6px;
        color: #333;
        cursor: pointer;
        transition: 0.4s;
        border: 1px solid #fff;

        &:hover {
          color: #fff;
          background: none;
        }
      }
    }
`

export const FindAndJoin = styled.div`
  max-width: 400px;
  min-width: 320px;
  text-align: center;

  ul {
    width: 400px;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 10px 0;
    padding: 0;

    li {
      a {
        transition: 0.4s;
        font-size: 14px;

        &:hover {
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }

  .join-as {
    width: 100%;
    font-size: 14px;

    a {
      font-size: 14px;
      padding-left: 10px;
      color: rgba(255, 255, 255, 0.6);
      transition: 0.4s;

      &:hover {
        color: #fff;
      }
    }
  }
`