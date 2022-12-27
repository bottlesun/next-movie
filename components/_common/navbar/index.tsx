import Link from 'next/link'
import useToggle from "../../../hooks/useToggle";
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
  const {toggleActive, setToggleActive, searchToggle} = useToggle();

  return (
    <NavList>

      <div className="menus" onClick={() => setToggleActive(true)}>
        <h3 className={'logo'}><Link href="/"><a>MOVING</a></Link></h3>
        <Link href="/tv"><a className={router.pathname === '/tv' ? 'active' : ''}>TV 프로그램</a></Link>
        <Link href="/movie"><a className={router.pathname === '/movie' ? 'active' : ''}>영화</a></Link>
      </div>
      <SearchBar toggleActive={toggleActive} setToggleActive={setToggleActive} searchToggle={searchToggle}/>
      {
        login ? <UserInfoSet menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> : <UserLoginSet/>
      }

    </NavList>
  )
}

export default Navigation;