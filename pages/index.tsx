import {useEffect} from "react";
import SEO from "../components/_common/seo";
import MainSlider from "../components/_main/mainSlider";
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import {SWRConfig, unstable_serialize} from "swr";
import fetcher from "../utils/fetcher";
import ContentsList from "../components/_common/contentsList";
import useLogin from "../hooks/useLogin";


export default function Home({fallback}: InferGetServerSidePropsType<typeof getStaticProps>) {
  useLogin();

  return (
    <SWRConfig value={fallback}>
      <SEO title={'Main'}/>
      <MainSlider/>

      <div className={'container'}>
        <div className={'inner'}>
          <ContentsList title={'Best Movie'} dataUrl={'/api/movies'} contentsType={'movie'}/>
          <ContentsList title={'Best TV show'} dataUrl={'/api/tv'} contentsType={'tv'}/>
        </div>
      </div>
    </SWRConfig>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  const movieData = await fetcher('http://localhost:3000/api/movies');
  const tvData = await fetcher('http://localhost:3000/api/tv')


  return {
    props: {
      fallback: {
        [unstable_serialize(['/api/movie/', 'article', 1])]: movieData,
        [unstable_serialize(['/api/contents/:id', 'article', 2])]: movieData,
        [unstable_serialize(['/api/tv', 'article', 3])]: tvData,
      }
    }
  }
}