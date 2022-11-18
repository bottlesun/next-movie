import styled from '@emotion/styled';
import {boxShadow} from "../../../styles/variable";


export const ContentExplanationWrap = styled.article`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

  #ContentExplanation {
    display: flex;
    min-width: 30px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 100px 20px 50px;
    overflow: hidden;

    img {
      min-width: 280px!important;
      min-height: 350px!important;
      object-fit: contain;
      box-shadow: ${boxShadow};
    }
  }
`

export const BG = styled.article`
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: -1;
  filter: blur(80px);
  opacity: 0.7;
`

export const Contents = styled.div`
  max-width: 600px;
  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  p {
    max-width: 400px;
    color: #ebebeb;
    margin-top: 25px;
    font-size: 14px;
    line-height: 1.5em;
  }

  .genres {
    display: flex;
    justify-content: start;
    gap: 10px;

    span {
      color: #ebebeb;
      border: 1px solid #ebebeb;
      padding: 4px 15px;
      font-size: var(--font-size-xsm);
      border-radius: 3px;
      cursor: default;
      box-shadow: rgba(0, 0, 0, 0.15) 0 3px 3px 0;
    }
  }
`

export const TitleBox = styled.div`
  h2{
    margin-bottom: 0;
  }
  p{
    margin: 0 0 20px;
    font-size: 12px;
    color:rgba(255, 255, 255, 0.7)
  }
`

