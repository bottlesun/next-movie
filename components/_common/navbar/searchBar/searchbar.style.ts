import styled from '@emotion/styled';

export const SearchWrap = styled.div`
  .icon-button {
    cursor: pointer;
  }
`

export const SearchActiveWrap = styled.section`
  width: 100%;
  height: 100vh;
  padding: 80px 30px 50px;
  background: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  .searchInputGuide {
    width: 100%;
    min-width: 500px;
    max-width: 800px;
    margin: 0 auto;
    
    .searchWrap{
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

export const SearchContentsImgUl = styled.ul`
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 0;
  margin: 30px auto 0;
  min-width: 500px;
  max-width: 800px;
  width: 100%;

  li {
    width: 100%;
    max-width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    p {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 200px;
      margin: 0;
    }


    span {
      width: 100%;
      display: block;
      font-size: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 5px;
    }
  }
`

export const SearchContentsTextUl = styled.ul`
  width: 100%;
  padding: 0;
  min-width: 500px;
  max-width: 800px;
  width: 100%;
  margin: 30px auto 0;

  li {
    width: 100%;
    max-width: 200px;
    margin-bottom: 8px;
    font-size: 13px;
    cursor: pointer;
    position: relative;
  }
`