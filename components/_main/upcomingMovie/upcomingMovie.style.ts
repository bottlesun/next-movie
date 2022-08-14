import styled from '@emotion/styled';
import {bgColor} from "../../../styles/variable";


export const MovieList = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  .swiper{
    overflow: visible;
  }
`;

export const MovieItemComponent = styled.div`

  .swiper-slide {
    width: 300px;
    height: 450px;
  }
`

export const MovieItems = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  position: relative;
  transition: 0.3s;
  top: 0;
  
  &:hover{
    top: -10px;
    span{
      color: rgba(255,255,255,0.8);

    }
  }

  .movieName {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px 0;
    font-size: 14px;
    font-weight: 500;
  }

  img {
    width: 100%;
    height: 100%;
 

    max-height: 300px;
    min-height: 200px;
    object-fit: cover;
  }

  span{
    display: block;
    width: 100%;
    font-size: 10px;
    text-align: right;
    transition: 0.3s;
    color: rgba(255,255,255,0.5);
  }
`