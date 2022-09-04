import styled from '@emotion/styled';
import {boxShadow} from "../../../styles/variable";


export const ContentExplanationWrap = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

  #ContentExplanation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 50px 50px;

    img {
      width: 280px;
      height: auto;
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
  width: 450px;

  h2 {
    font-size: 35px;
    margin-bottom: 20px;
  }

  p {
    color: #ebebeb;
    margin-top: 25px;
  }

  .genres{
    display: flex;
    justify-content: start;
    gap: 10px;
    
    span {
      color: #ebebeb;
      border: 1px solid #ebebeb;
      padding: 4px 15px;
      font-size: 13px;
      border-radius: 3px;
      cursor: default;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    } 
  }
`