import Link from 'next/link';
import gravatar from "gravatar";
import Image from "next/image";
import router from "next/router";
import React, {useCallback ,MouseEvent} from "react";
import user from "../../../data/dummy";
import useLoginStore from "../../../stores/loginStores";
import {UserInfo} from "../navbar/userInfoSet/userInfoSet.style";



const Menu = () => {
  const {setLogin} = useLoginStore()

  const stopPropagation = useCallback((e:MouseEvent<HTMLUListElement>) => {
    e.stopPropagation();
  }, []);

  const onLogoutSet = useCallback(() => {
     setLogin(false);
    return router.push('/user/login')
  },[setLogin ])

  return (
    <UserInfo onClick={stopPropagation}>
      <div className="user_names">
        <Image src={'https:' + gravatar.url(user[0].email, {s: '30px', d: 'retro'})} alt={user[0].name} width={25}
               height={25}/>
        <span>{user[0].name}님!</span>
      </div>
      <hr/>
      <li><a href="#">MY</a></li>
      <li><a href="#">이용권</a></li>
      <li> <a onClick={onLogoutSet} >LOGOUT</a></li>

    </UserInfo>
  )
}

export default Menu