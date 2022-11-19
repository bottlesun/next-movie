import styled from '@emotion/styled';
import {bgColor, boxShadow} from "../../../../styles/variable";


export const UserInfoNav = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  gap: 10px;
  justify-content: center;
  margin-left: 20px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 6px;
    margin-right: 10px;
  }

`


export const UserInfo = styled.ul`
  display: flex;
  width: 200px;
  position: absolute;
  top: 25px;
  right: 0;
  flex-direction: column;
  justify-content: center;
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
    gap: 10px;

    span {
      color: rgba(255, 255, 255, 0.8);
      font-size: var(--font-size-xsm);
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
      color: rgba(255, 255, 255, 0.8);
      transition: 0.2s;
      font-size: var(--font-size-xsm)
    }

    &:hover {
      background: #ebebeb;

      a {
        color: ${bgColor};
      }
    }
  }

`