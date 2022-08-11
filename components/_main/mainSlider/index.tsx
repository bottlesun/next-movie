import useSWR from 'swr'
import fetcher from "../../../utils/fetcher";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import {SlideComponent,MoveBg} from "./mainSlider.style";
import MoviApiDatainterface from "../../../interfaces/movie.interfaces";

const MainSlider = () => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  const {data:movieData} = useSWR('/api/movies/', fetcher, {
    dedupingInterval: 2000,
  })


  const buttonClick = () => {
    console.log('버튼 클릭중')
  }
  return (
    <SlideComponent>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={true}
      >
        {
          movieData?.map((movieData: MoviApiDatainterface) => {
            return <SwiperSlide key={movieData.id}>
              <div className={"movieImages"} style={{backgroundImage : "url(" + `${IMG_URL}${movieData.poster_path}` + ")"}}></div>
              <div className={"movieTitle"} >
                <MoveBg style={{backgroundImage : "url(" + `${IMG_URL}${movieData.poster_path}` + ")"}}></MoveBg>
                <div className={"movieTextBox"}>
                  <h3>{movieData.title}</h3>
                  <p>{movieData.overview}</p>
                  <button onClick={buttonClick}>More</button>
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