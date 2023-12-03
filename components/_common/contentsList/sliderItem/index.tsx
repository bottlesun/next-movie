import {MovieApiDataInterface, movieList} from "../../../../interfaces/movie.interfaces";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useState, memo} from "react";
import useSWR from "swr";
import fetcher from "../../../../utils/fetcher";
import "swiper/css";
import "swiper/css/navigation";
import {MovieItems, MovieItemTitleBox} from "../movieList.style";
import Link from "next/link";
import Image from "next/image";


const SliderItem = memo(({dataUrl, contentsValue}: movieList) => {
  const {data: Data} = useSWR(dataUrl, fetcher, {
    dedupingInterval: 2000,
  });

  const IMG_URL = 'https://image.tmdb.org/t/p/w500/'
  const [movieItemHover, setMovieItemHover] = useState("");

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={7}
      navigation={true} modules={[Navigation]}
    >
      {
        Data?.results?.map((item: MovieApiDataInterface) => {
          console.log(IMG_URL + item.poster_path)
          return <SwiperSlide
            key={item.id}
            onMouseEnter={() => setMovieItemHover(`${item.id}`)}
            onMouseLeave={() => setMovieItemHover("")}
            className={'movieItemComponent'}
          >

            <Link href={`/contents/${contentsValue}/${item.id}`}>
              <MovieItems className={`${movieItemHover !== '' ? 'on' : ''}`}>
                <Image src={`${item.poster_path === null || item.poster_path === undefined  ? '/images/dummy.png' : IMG_URL + item.poster_path}`}
                       alt={item.title} width={280} height={350}/>
              </MovieItems>
            </Link>
            {contentsValue === 'tv' ?
              <MovieItemTitleBox>
                <div className={'movieName'}>{item.name}</div>
                <span>{item.first_air_date} 방영일</span>
              </MovieItemTitleBox> :
              <MovieItemTitleBox>
                <div className={'movieName'}>{item.title}</div>
                <span>{item.release_date} 개봉</span>
              </MovieItemTitleBox>
            }
          </SwiperSlide>
        })
      }
    </Swiper>
  )
});
SliderItem.displayName = 'SliderItem';

export default SliderItem