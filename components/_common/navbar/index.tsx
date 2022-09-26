import Link from 'next/link'
import {NavList, UserInfo} from "./navBar.styles";
import gravatar from "gravatar";
import user from '../../../data/dummy'
import {useRouter} from "next/router";
import React, {useState} from "react";
import Image from "next/image";

const Navigation = () => {
  const [clicks, setClicks] = useState(false);
  const router = useRouter();

  function userNameHide(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault()
    setClicks(!clicks)
  }

  return (
    <NavList>
      <div className="menus">
        <Link href="/"><h3>MOVING</h3></Link>
        <Link href="/tv"><a className={router.pathname === '/tv' ? 'active' : ''}>TV 프로그램</a></Link>
        <Link href="/movie"><a className={router.pathname === '/movie' ? 'active' : ''}>영화</a></Link>
      </div>

      <div className="user_info" onClick={userNameHide}>
        <Image src={'https:'+ gravatar.url(user[0].email, {s: '30px', d: 'retro'})} alt={user[0].name} width={20} height={20}/>
        <div>{user[0].name}님!</div>

        {
          clicks && <UserInfo onClick={(e) => e.stopPropagation()}>
            <div className="user_names">
              <Image src={'https:'+ gravatar.url(user[0].email, {s: '30px', d: 'retro'})} alt={user[0].name} width={25} height={25}/>
              <span>{user[0].name}님!</span>
            </div>
            <hr/>
            <li><a href="#">MY</a></li>
            <li><a href="#">이용권</a></li>

            <div className={'logout'}>
              LOGOUT
            </div>
          </UserInfo>
        }
      </div>
    </NavList>
  )
}

export default Navigation;