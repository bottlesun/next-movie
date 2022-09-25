import styled from '@emotion/styled';
import {bgColor, boxShadow} from "../../../styles/variable";

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 15px;
  color: #fff;
  background: linear-gradient(${bgColor}, 55%, transparent);
  padding: 0 20px;
  position: absolute;
  z-index: 999;

  .menus {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 20px;

    h3 {
      width: 150px;
      font-size: 3rem;
      letter-spacing: 2px;
      cursor: pointer;
      margin: 0 10px;
    }

    a {
      margin: 10px;
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.7);

      :hover {
        color: #fff;
        font-weight: 500;
      }

      &.active {
        color: #fff;
        font-weight: 500;
      }
    }
  }

  .user_info {
    width: 200px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    position: relative;

    img {
      width: 30px;
      height: 30px;
      border-radius: 6px;
      margin-right: 10px;
    }
  }
`

export const UserInfo = styled.ul`
  display: flex;
  position: absolute;
  top: 25px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: ${bgColor};
  border-radius: 5px;
  padding: 0;
  box-shadow: ${boxShadow};
  
  .user_names{
    padding: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    span{
     color: #fff; 
    }
  }
  hr{
    width: 85%;
  }
  li {
    padding: 10px;
    transition: 0.2s;
    a{
      width: 100%;
      display: block;
      color: #fff;
      transition: 0.2s;
    }
    &:hover{
      background: #ebebeb;
      a{
        color: ${bgColor};
      }
    }
  }

`