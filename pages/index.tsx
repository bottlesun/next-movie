import SEO from "../components/_common/seo";
import MainSlider from "../components/_main/mainSlider";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import axios from "axios";
import {useEffect, useState} from "react";
import MoviApiDatainterface from "../interfaces/movie.interfaces";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      (async () => {
        const {data: results} = await axios.get('/api/movies');
        setMovies(results.results)
      })();
    },
    [])

  return (
    <>
      <SEO title={'Main'}/>
      <MainSlider {...movies}/>
      {
        movies?.map((movie: MoviApiDatainterface) => {
          return <div key={movie.id}>{movie.original_title}</div>
        })
      }
    </>
  )
}

