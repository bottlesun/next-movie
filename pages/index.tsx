import SEO from "../components/_common/seo";
import MainSlider from "../components/_main/mainSlider";
import UpcomingMovie from "../components/_main/upcomingMovie";
import { GetServerSideProps , InferGetServerSidePropsType } from 'next'
import useSWR,{SWRConfig, unstable_serialize} from "swr";
import fetcher from "../utils/fetcher";


export default function Home({fallback}:InferGetServerSidePropsType< typeof getStaticProps>) {

  return (
    <SWRConfig value={fallback}>

    <SEO title={'Main'}/>
      <MainSlider/>

      <div className={'container'}>
        <div className={'inner'}>
          <UpcomingMovie/>
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