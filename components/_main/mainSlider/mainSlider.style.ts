import styled from '@emotion/styled';
import {bgColor} from "../../../styles/variable";

export const SlideComponent = styled.nav`
  width: 100%;
  margin-bottom: 50px;
  color: #fff;

  .swiper {
    height: 100vh;
    position: relative;

    .swiper-wrapper {
      width: 100%;
      height: 100%;

      .swiper-slide {
        width: 100%;
        height: 100%;
        background: #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: ${bgColor};

        & :before {
          width: 100%;
          height: 150px;
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          background: linear-gradient(to top, ${bgColor}, 40%, transparent);
          z-index: -1;
        }
        

        .movieImages {
          width: 100%;
          height: 100%;
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          z-index: 0;
        }


        .movieTitle {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          position: relative;
          z-index: 1;

          & :before {
            width: 100%;
            height: 150px;
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            background: linear-gradient(to top, ${bgColor}, 40%, transparent);
            z-index: -1;
          }

          .movieTextBox {
            box-sizing: border-box;
            width: 90%;
            margin: 0 5%;
            padding: 10% 0;

            & h3 {
              margin-bottom: 5px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            & p {
              font-size: 13px;
              max-width: 600px;
              margin-bottom: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }

            & button {
              width: 100px;
              padding: 8px 25px;
              border: 1px solid #eaeaea;
              background: none;
              border-radius: 5px;
              color: #fff;
              cursor: pointer;
              transition: 0.3s;

              :hover {
                background: #fff;
                color: ${bgColor}
              }
            }
          }
        }
      }
    }
  }
`;

export const MoveBg = styled.div`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(10px);
  z-index: -1;
`