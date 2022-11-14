import styled from '@emotion/styled';
import {bgColor, boxShadow} from "../../styles/variable";


export const SearchWrap = styled.div`
  .searchInputGuide {
    width: 100%;
    min-width: 500px;
    max-width: 800px;
    margin: 0 auto;

    .searchWrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 5px 0;
      height: 100%;
      text-align: center;
    }

    .searchInput {
      width: 100%;

      input {
        width: 100%;
        height: 30px;
        border: none;
        background: none;
        position: relative;
        margin: 0 auto;

        &:focus {
          outline: none;
        }
      }
    }

    button {
      width: 30px;
      height: 30px;
      background: url("/images/icon_search.svg") no-repeat center center;
      background-size: cover;
      border: none;
      cursor: pointer;
      position: relative;
    }

    hr {
      background: #fff;
    }
  }
`

export const SearchLength = styled.div`
  font-size: 20px;
  padding: 50px;
  margin: 0 auto;
  text-align: center;
`