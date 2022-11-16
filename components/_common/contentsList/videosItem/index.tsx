import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {MovieApiDataInterface, movieList} from "../../../../interfaces/movie.interfaces";
import useSWR from "swr";
import fetcher from "../../../../utils/fetcher";
import "swiper/css";
import {memo} from "react";
import {NoneData, VideoItems} from "../sliderItem/sliderItem.style";


const VideoItem = memo(({dataUrl}: movieList) => {
  const {data: Data} = useSWR(dataUrl, fetcher);
  const youtubeUrl = 'https://www.youtube.com/embed/';
  const youtubeImgUrl = 'https://img.youtube.com/vi/';
  console.log(Data?.results.length)
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}>
      {Data?.results.length === 0 ?
        <NoneData>영상이 없습니다.</NoneData>
        :
        Data?.results?.map((item: MovieApiDataInterface) => {
          return <SwiperSlide
            key={item.id}>
            <VideoItems className={'VideoItem'}
                        key={item.id}>
              <Image src={youtubeImgUrl + item.key + '/0.jpg'} alt={item.title} layout={"fill"}/>
              {/*<iframe src={youtubeUrl + item.key} title={item.name}*/}
              {/*        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
              {/*        allowFullScreen></iframe>*/}
            </VideoItems>
          </SwiperSlide>
        })

      }
    </Swiper>
  )
});
VideoItem.displayName = 'VideoItem';

export default VideoItem