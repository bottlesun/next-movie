import styled from '@emotion/styled';
import {bgColor, boxShadow} from "../../../../styles/variable";


export const UserInfoNav = styled.div`

    width: 200px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    gap: 10px;
    justify-content: center;

    img {
      width: 30px;
      height: 30px;
      border-radius: 6px;
      margin-right: 10px;
    }
  
`


export const UserInfo = styled.ul`
  display: flex;
  position: absolute;
  top: 25px;
  left: 0;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: ${bgColor};
  border-radius: 5px;
  padding: 0;
  box-shadow: ${boxShadow};

  .user_names {
    padding: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    gap:10px;

    span {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  hr {
    width: 85%;
    background: #fff;
    opacity: 0.5;
  }

  li {
    padding: 10px;
    transition: 0.2s;

    a {
      width: 100%;
      display: block;
      color: rgba(255,255,255,0.8);
      transition: 0.2s;
      font-size: 1.2rem;
    }

    &:hover {
      background: #ebebeb;

      a {
        color: ${bgColor};
      }
    }
  }

`