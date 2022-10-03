import {ModalBg} from "./commonModal.style";
import {Button} from "../../_common/commonButton/commonButton.style";
import {useRef, useState} from "react";

export interface modal {
  children: string
  buttonChildren: string
  modalOpen : boolean
  setModalOpen : (modalOpen:boolean) => void
}

const CommonModal = ({children, buttonChildren,modalOpen,setModalOpen}: modal) => {
const displayTarget = useRef(null)

  const closeModal = () => {

    setModalOpen(false)
  }

  return (
    <ModalBg ref={displayTarget} onClick={closeModal} >
      <div className={'modalComponent'} >
        <div className={'modalHead'}></div>
        <div className={'modalBody'}>
          {children}
        </div>

        <div className={'modalFooter'}>
          <Button type={'button'}>{buttonChildren}</Button>
        </div>
      </div>
    </ModalBg>
  )
}
export default CommonModal;