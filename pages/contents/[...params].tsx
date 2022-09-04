import SEO from "../../components/_common/seo";
import ContentExplanation from "../../components/_content/contentExplanation";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import {InferGetServerSidePropsType, GetServerSidePropsContext} from 'next'


type MovieDetailParams = [string, string] | [];


const Contents = ({params}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
const [id] = (params || []) as MovieDetailParams;


  const {data: contentsData} = useSWR(`/api/contents/${id}`, fetcher, {
    dedupingInterval: 2000,
  })

  return (
    <div>
      <SEO title={contentsData?.title}/>
      <ContentExplanation {...contentsData}/>
    </div>
  )
}
export default Contents;


/*
export const getServerSideProps = async () => {

    const res = await fetch('http://localhost:3000/api/movies');
    const data = await res.json()
  return {props: {data}};
};
*/


export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return { props: { params: context.query.params } };
};