import styled from '@emotion/styled';
import {bgColor, boxShadow} from "../../../styles/variable";

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
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
    z-index: 999;
    

    a {
      margin: 10px;
      font-size: var(--font-size-sm);
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
`