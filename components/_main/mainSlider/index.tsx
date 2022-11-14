import useSWR from 'swr'
import fetcher from "../../../utils/fetcher";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import {SlideComponent, MoveBg} from "./mainSlider.style";
import MoviApiDatainterface from "../../../interfaces/movie.interfaces";
import Link from "next/link";
import {Button} from "../../_common/commonButton/commonButton.style";

const MainSlider = () => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  const {data: movieData} = useSWR('/api/movie/', fetcher, {
    dedupingInterval: 2000,
  })

  return (
    <SlideComponent>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {
          movieData?.results?.slice(0, 5)?.map((movieData: MoviApiDatainterface) => {
            return <SwiperSlide key={movieData.id}>
              <div className={"movieImages"}
                   style={{backgroundImage: "url(" + `${IMG_URL}${movieData.poster_path}` + ")"}}></div>
              <div className={"movieTitle"}>
                <MoveBg style={{backgroundImage: "url(" + `${IMG_URL}${movieData.poster_path}` + ")"}}></MoveBg>
                <div className={"movieTextBox"}>
                  <h3>{movieData.title}</h3>
                  <p>{movieData.overview}</p>
                  <Link href={`/contents/movie/${movieData.id}`}>
                    <Button>
                      {'More'}
                    </Button>
                  </Link>

                </div>
              </div>
            </SwiperSlide>
          })
        }

      </Swiper>
    </SlideComponent>
  )
}

export default MainSlider
