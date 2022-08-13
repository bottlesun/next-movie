import {MovieList} from "./upcomingMovie.style";
import useSWR from 'swr'
import fetcher from "../../../utils/fetcher";
import MoviApiDatainterface from "../../../interfaces/movie.interfaces";

const UpcomingMovie = () => {
  const {data: upcomingData} = useSWR('/api/movies/upcoming', fetcher, {
    dedupingInterval: 2000,
  })
console.log(upcomingData)
  return (
    <MovieList>
      {/*{*/}
      {/*  upcomingData?.map((movie: MoviApiDatainterface) => {*/}
      {/*    return movie.title*/}
      {/*  })*/}
      {/*}*/}
    </MovieList>
  )
}

export default UpcomingMovie;