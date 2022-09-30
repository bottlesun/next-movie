import router from "next/router";
import {useEffect} from "react";
import useLoginStore from "../stores/loginStores";

 const useLogin = () => {
  const {login} = useLoginStore();

  useEffect(() => {
    if (!login) {
      console.log('Please login 🙏')
      router?.push('/user/login')
    }
  }, [login])
}

export default useLogin;