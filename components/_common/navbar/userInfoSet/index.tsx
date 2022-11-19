import gravatar from "gravatar";
import Image from "next/image";
import React, {MouseEvent, useCallback} from "react";
import user from "../../../../data/dummy";
import {menuInterface} from "../../../../interfaces/menu.interfaces";
import Menu from "../../menu";
import {UserInfoNav} from "./userInfoSet.style";

const UserInfoSet = ({setMenuOpen, menuOpen}: menuInterface) => {

  const menuOpenHandler = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }, [menuOpen, setMenuOpen]);


  return (
    <UserInfoNav className="user_info" onClick={menuOpenHandler}>
      <Image src={'https:' + gravatar.url(user[0].email, {s: '20px', d: 'retro'})} alt={user[0].name}
             width={25}
             height={25}/>
      {
        menuOpen && <Menu/>
      }
    </UserInfoNav>

  )
}
export default UserInfoSet
