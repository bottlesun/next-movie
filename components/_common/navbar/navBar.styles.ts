import styled from '@emotion/styled';

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 15px;
  color: #fff;
  background: linear-gradient(#333, 55%, transparent);
  padding: 0 20px;

  .menus {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 20px;

    h3 {
      width: 150px;
      font-size: 2rem;
      letter-spacing: 2px;
      cursor: pointer;
      margin: 0 10px;
    }

    a {
      margin: 10px;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);

      :hover {
        color: #fff;
        font-weight: 500;
      }
      
      &.active{
        color: #fff;
        font-weight: 500;
      }
    }
  }

  .user_info {
    width: 200px;
    display: flex;
    align-items: center;
    margin-right: 20px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 6px;
      margin-right: 10px;
    }
  }
  

`