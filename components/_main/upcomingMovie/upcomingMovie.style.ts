import styled from '@emotion/styled';


export const MovieList = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px 0;

  .swiper {
    overflow: visible;
  }
  .swiper-slide {
   display: block;
  }
`;



export const MovieItems = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  position: relative;
  transition: 0.3s;
  top: 0;

  &:hover {
    top: -10px;
  }
  

  img {
    width: 100%;
    height: 100%;
    max-height: 300px;
    min-height: 200px;
    object-fit: cover;
  }

`

export const MovieHoverItem = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  padding: 5px;
  font-size: 10px;
  
  p{
    overflow: hidden;
    white-space: normal;
    text-overflow : ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:12;
    -webkit-box-orient:vertical;
  }
  &.on {
    opacity: 1;
    background-color: #333;
    padding: 0 10px;
  }
`

export const MovieItemTitleBox = styled.div`
  .movieName {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px 0;
    font-size: 14px;
    font-weight: 500;
  }
  
  span {
    display: block;
    width: 100%;
    font-size: 10px;
    text-align: right;
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.5);
  }
`