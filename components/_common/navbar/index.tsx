import Link from 'next/link'
import {menuInterface} from "../../../interfaces/menu.interfaces";
import useLoginStore from '../../../stores/loginStores'
import {NavList} from "./navBar.style";
import {useRouter} from "next/router";
import React from "react";
import UserInfoSet from "./userInfoSet";
import UserLoginSet from "./userLoginSet";
import SearchBar from "./searchBar";


const Navigation = ({menuOpen, setMenuOpen}: menuInterface) => {
  const router = useRouter();
  const {login} = useLoginStore();

  return (
    <NavList>
      <div className="menus">
        <Link href="/"><a><h3>MOVING</h3></a></Link>
        <Link href="/tv"><a className={router.pathname === '/tv' ? 'active' : ''}>TV 프로그램</a></Link>
        <Link href="/movie"><a className={router.pathname === '/movie' ? 'active' : ''}>영화</a></Link>
      </div>
      <SearchBar/>
      {
        login ? <UserInfoSet menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> : <UserLoginSet/>
      }

    </NavList>
  )
}

export default Navigation;