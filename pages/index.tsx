import SEO from "../components/_common/seo";
import MainSlider from "../components/_main/mainSlider";
import UpcomingMovie from "../components/_main/upcomingMovie";
import axios from "axios";
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
  const article = await axios.get('http://localhost:3000/api/movies')
    .then((response) => response.data.results)
    .catch((error) => console.dir(error))

  return {
    props: {
      fallback: {
        '/api/movie/': article
      }
    }
  }
}