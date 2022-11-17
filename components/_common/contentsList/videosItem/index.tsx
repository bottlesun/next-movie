import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import useSWR from "swr";
import fetcher from "../../../../utils/fetcher";
import {MouseEvent, memo, useState} from "react";
import VideoModal from "../../../_modal/videoModal";
import {NoneData, VideoItems} from "../sliderItem/sliderItem.style";
import {MovieApiDataInterface, movieList} from "../../../../interfaces/movie.interfaces";


const VideoItem = memo(({dataUrl}: movieList) => {
  const {data: Data} = useSWR(dataUrl, fetcher);
  const [itemKey, setItemKey] = useState('');
  const youtubeImgUrl = 'https://img.youtube.com/vi/';
  const [modalOpen, setModalOpen] = useState(false);

  const isGetItemKey = (e: MouseEvent<HTMLDivElement>) => {
    setItemKey(e.currentTarget.id)
    setModalOpen(true)
  }

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation={true} modules={[Navigation]}
    >
      {Data?.results.length === 0 ?
        <NoneData>영상이 없습니다.</NoneData>
        :
        Data?.results?.map((item: MovieApiDataInterface) => {
          return <SwiperSlide
            className={'videoItemComponent'}
            key={item.id}>

            <VideoItems className={'VideoItem'}
                        onClick={isGetItemKey}
                        id={item.key}
                        key={item.id}>
              <Image src={youtubeImgUrl + item.key + '/0.jpg'} alt={item.title} height={350} width={480}/>
              <div className={'icon-wrap'}>
                <i className="play-button"></i>
              </div>
            </VideoItems>
          </SwiperSlide>
        })
      }
      {
        modalOpen &&
        <VideoModal setModalOpen={setModalOpen} itemKey={itemKey}/>
      }

    </Swiper>
  )
});
VideoItem.displayName = 'VideoItem';

export default VideoItem