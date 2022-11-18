import styled from '@emotion/styled';
import {bgColor} from "../../../styles/variable";

export const Button = styled.a`
  width: 100px;
  padding: 8px 0;
  font-size: 15px;
  border: 1px solid #eaeaea;
  background: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  display:block;
  text-align:center;

  :hover {
    background: #fff;
    color: ${bgColor}
  }

`