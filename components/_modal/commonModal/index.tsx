import Link from 'next/link';
import {ModalBg} from "./commonModal.style";
import {Button} from "../../_common/commonButton/commonButton.style";
import { useRef} from "react";

export interface modal {
  children: string
  buttonChildren: string
  modalOpen: boolean
  setModalOpen: (modalOpen: boolean) => void
  url:string
}

const CommonModal = ({children, buttonChildren, setModalOpen,url}: modal) => {
  const displayTarget = useRef(null)

  const closeModal = () => {
    setModalOpen(false)
  }


  return (
    <ModalBg ref={displayTarget} >
      <div className={'modalComponent'}>
        <div className={'modalHead'}></div>
        <div className={'modalBody'}>
          {children}
        </div>

        <div className={'modalFooter'}>
          <Link href={url}>
            <Button type={'button'} onClick={closeModal}>{buttonChildren}</Button>
          </Link>

        </div>
      </div>
    </ModalBg>
  )
}
export default CommonModal;