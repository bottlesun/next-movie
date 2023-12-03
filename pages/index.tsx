import SEO from "../components/_common/seo";
import MainSlider from "../components/_main/mainSlider";
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import {SWRConfig, unstable_serialize} from "swr";
import fetcher from "../utils/fetcher";
import ContentsList from "../components/_common/contentsList";
import useLogin from "../hooks/useLogin";

const serverUrl = process.env.NODE_ENV === 'production' ? 'https://bottlesun.github.io/next-movie/' : 'http://localhost:3000';


export default function Home({fallback}: InferGetServerSidePropsType<typeof getStaticProps>) {
  useLogin();


  return (
    <SWRConfig value={fallback}>
      <SEO title={'Main'}/>
      <MainSlider/>

      <div className={'container'}>
        <div className={'inner'}>
          <ContentsList title={'Best Movie'} dataUrl={'/api/movie'} contentsValue={'movie'} videos={false}/>
          <ContentsList title={'Best TV show'} dataUrl={'/api/tv'} contentsValue={'tv'} videos={false}/>
        </div>
      </div>
    </SWRConfig>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  // const movieData = await fetcher(`${serverUrl}/api/movie`);
  // const tvData = await fetcher(`${serverUrl}/api/tv`);


  return {
    props: {
      fallback: {
        // [unstable_serialize(['/api/movie/', 'article', 1])]: movieData,
        // [unstable_serialize(['/api/contents/:id', 'article', 2])]: movieData,
        // [unstable_serialize(['/api/tv', 'article', 3])]: tvData,
      }
    }
  }
}