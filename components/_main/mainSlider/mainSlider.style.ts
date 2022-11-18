import styled from '@emotion/styled';
import {mainBgColor, bgColor} from "../../../styles/variable";

export const SlideComponent = styled.article`
  width: 100%;
  margin-bottom: 50px;
  color: #fff;


  .swiper {
    height: 100%;
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


        .movieImages {
          width: 100%;
          height: 100%;
          background-position: top center;
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

          :before {
            width: 100%;
            height: 300px;
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            background: linear-gradient(to top, ${mainBgColor}, 10%, transparent);
            z-index: -1;
          }

          .movieTextBox {
            box-sizing: border-box;
            width: 50%;
            margin: 0 5%;
            padding: 30% 0 5%;

            :before {
              width: 100%;
              height: 300px;
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              background: linear-gradient(to top, ${mainBgColor}, 10%, transparent);
              z-index: -1;
            }

            & h3 {
              font-size: var(--font-size-md);
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


              :before {
                width: 100%;
                height: 300px;
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                background: linear-gradient(to top, ${mainBgColor}, 10%, transparent);
                z-index: -1;
              }
            }
          }
        }
      }
    }
  }
`;

