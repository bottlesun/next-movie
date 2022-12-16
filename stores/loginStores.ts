import create from 'zustand';


interface loginState {
  login: boolean,
  setLogin: (login: boolean) => void
}

const useLoginStore = create<loginState>((set) => ({
  login: false,
  setLogin: (login) => set({login: login})
}))

export default useLoginStore;
