import {ModalBg} from "./commonModal.style";
import {Button} from "../../_common/commonButton/commonButton.style";

export interface modal {
  children: string
  buttonChildren: string
}

const CommonModal = ({children, buttonChildren}: modal) => {
  return (
    <ModalBg>
      <div className={'modalComponent'}>
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