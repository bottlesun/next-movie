import SEO from "../components/_common/seo";
import MainSlider from "../components/_main/mainSlider";
import { GetServerSideProps , InferGetServerSidePropsType } from 'next'
import {SWRConfig, unstable_serialize} from "swr";
import fetcher from "../utils/fetcher";
import MovieList from "../components/_common/movieList";


export default function Home({fallback}:InferGetServerSidePropsType< typeof getStaticProps>) {

  return (
    <SWRConfig value={fallback}>

    <SEO title={'Main'}/>
      <MainSlider/>

      <div className={'container'}>
        <div className={'inner'}>
          <MovieList title={'Best Movie'} dataUrl={'/api/movies/upcoming'}/>
        </div>
      </div>
    </SWRConfig>
  )
}

export const getStaticProps : GetServerSideProps = async() =>{
  const movieData = await fetcher('http://localhost:3000/api/movies');

  return {
    props: {
      fallback: {
        [unstable_serialize(['/api/movie/', 'article', 1])]: movieData,
        [unstable_serialize(['/api/contents/:id', 'article', 2])]: movieData,
      }
    }
  }
}