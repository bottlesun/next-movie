import styled from '@emotion/styled';
import {bgColor, boxShadow} from "../../../../styles/variable";

export const SearchWrap = styled.div`
  .icon-button {
    cursor: pointer;
  }
`

export const SearchActiveWrap = styled.section`
  width: 100%;
  height: 100vh;
  padding: 80px 30px 50px;
  background: ${bgColor};
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  .searchInputGuide{
    max-width: 500px;
    margin: 0 auto;
    
    .searchInput {
      padding: 30px 5px 0;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        width: 100%;
        height:30px;
        border: none;
        background: none;
        position: relative;
        margin: 0 auto;

        &:focus {
          outline: none;
        }
      }

      button{
        width: 30px;
        height: 30px;
        background: url("/images/icon_search.svg") no-repeat center center;
        background-size: cover;
        border: none;
        cursor: pointer;
      }
    } 
  }
`