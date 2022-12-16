import styled from '@emotion/styled';


export const MovieListComponent = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 0 20px;

  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    display: block;
  }

  .movieItemComponent {
    width: 230px !important;
  }

  .videoItemComponent {
    width: 480px !important;
  }
`;


export const MovieItems = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  position: relative;
  transition: 0.3s;
  top: 0;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    top: -10px;
  }


  img {
    width: 100%;
    height: 100%;
    min-height: 350px !important;
    object-fit: cover;
  }
`


export const MovieItemTitleBox = styled.div`
  .movieName {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px 0;
    font-size: var(--font-size-sm);
    font-weight: 500;
  }

  span {
    display: block;
    width: 100%;
    font-size: var(--font-size-xsm);
    text-align: right;
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.5);
  }
`