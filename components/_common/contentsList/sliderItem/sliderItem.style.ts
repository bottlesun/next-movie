import styled from '@emotion/styled';

export const VideoItems = styled.div`
  height: 350px;
  position: relative;
  cursor: pointer;
  background: rgba(0, 0, 0, 1);

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const NoneData = styled.div`
  padding: 20px;
  font-size: 16px;
  text-align: center;
`