import styled from '@emotion/styled';
import {bgColor, boxShadow, mainBgColor} from "../../../styles/variable";


export const ModalBg = styled.article`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);

  .modalComponent {
    width: 100%;
    max-width: 400px;
    min-width: 250px;
    height: 100%;
    max-height: 200px;
    background: ${bgColor};
    box-shadow: ${boxShadow};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .modalBody {
    padding: 40px;
    max-height: 100px;
  }

  .modalFooter {

  }

`