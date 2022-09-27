import React from "react";
import {UserLoginNav} from "./userLoginSet.style";
import Link from "next/link";


const UserLoginSet = () => {

  return (
    <UserLoginNav>
      <Link href="/user/login"><a>로그인이 필요합니다.</a></Link>
    </UserLoginNav>
  )
}
export default UserLoginSet
