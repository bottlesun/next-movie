import {MovieList} from "./latestMovie.style";
import useSWR from 'swr'
import fetcher from "../../../utils/fetcher";
import MoviApiDatainterface from "../../../interfaces/movie.interfaces";

const LatestMovie = () => {
  const {data: movieData} = useSWR('/api/movies/', fetcher, {
    dedupingInterval: 2000,
  })

  return (
    <MovieList>
      {
        movieData?.map((movie: MoviApiDatainterface) => {
          return movie.title
        })
      }
    </MovieList>
  )
}

export default LatestMovie;