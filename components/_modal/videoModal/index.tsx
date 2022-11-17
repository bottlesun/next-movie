import {MovieApiDataInterface} from "../../../interfaces/movie.interfaces";
import {ModalBg} from "../commonModal/commonModal.style";
import {useRef, SetStateAction, Dispatch} from "react";

type videoModal = {
  setModalOpen: Dispatch<SetStateAction<boolean>>
  itemKey: string | undefined
}

const VideoModal = ({setModalOpen, itemKey}: videoModal) => {
  const displayTarget = useRef(null);
  const youtubeUrl = 'https://www.youtube-nocookie.com/embed/';

  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <ModalBg ref={displayTarget} onClick={closeModal}>
      <div className={'modalVideoComponent'}>
        <div className={'modalHead'}></div>
        <div className={'modalBody'}>

          <iframe src={youtubeUrl + itemKey} title={'동영상'}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>

        </div>
        <div className={'modalFooter'}>
        </div>
      </div>
    </ModalBg>
  )
}
export default VideoModal;