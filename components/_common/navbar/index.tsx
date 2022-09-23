import Link from 'next/link'
import {NavList} from "./navBar.styles";
import gravatar from "gravatar";
import user from '../../../data/dummy'
import {useRouter} from "next/router";

const Navigation = () => {
  const router = useRouter();

  return (
    <NavList>
      <div className="menus">
        <Link href="/"><h3>MOVING</h3></Link>
        <Link href="/tv"><a className={router.pathname === '/tv' ? 'active' : ''}>TV 프로그램</a></Link>
        <Link href="/movie"><a className={router.pathname === '/movie' ? 'active' : ''}>영화</a></Link>
      </div>

      <div className="user_info">
        <img src={gravatar.url(user[0].email, {s: '30px', d: 'retro'})} alt={user[0].name}/>
        <div>{user[0].name}님!</div>
      </div>
    </NavList>
  )
}

export default Navigation;