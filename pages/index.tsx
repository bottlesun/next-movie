import SEO from "../components/_common/seo";
import MainSlider from "../components/_main/mainSlider";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import axios from "axios";
import {useEffect, useState} from "react";
import MoviApiDatainterface from "../interfaces/movie.interfaces";



export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

        axios.get('/api/movies')
          .then((response) => {
            setMovies(response.data.results)
          })
    },
    [])

  return (
    <>
      <SEO title={'Main'}/>
      <MainSlider />

      <div className={'inner'}>
        {
          movies?.map((movie:MoviApiDatainterface) => {
            return <div key={movie?.id}>{movie?.title}</div>
          })
        }
      </div>
    </>
  )
}

