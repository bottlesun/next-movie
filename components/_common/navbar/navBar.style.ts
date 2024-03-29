import styled from '@emotion/styled';
import {bgColor} from "../../../styles/variable";
import {theme} from "../../../styles/theme";

const {tablet} = theme;

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
  
  .logo {
    font-size: var(--font-size-lg) !important;
    letter-spacing: 2px;
    cursor: pointer;
    margin: 0 10px;

    a {
      font-size: var(--font-size-lg) !important;
      color: rgba(255, 255, 255, 1)!important;

      :hover {
        font-weight: 700!important;
      }
    }

  }


  .menus {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 20px;
    z-index: 999;
    gap: 20px;


    a {
      font-size: var(--font-size-sm);
      color: rgba(255, 255, 255, 0.7);

      :hover {
        color: #fff;
      }

      &.active {
        color: #fff;
      }
    }
  }

  ${tablet} {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%);

    .logo {
      a {
        margin: 0 !important;
      }
    }

    .menus {
      display: block;

      a {
        margin-left: 10px;
      }
    }
  }
`
