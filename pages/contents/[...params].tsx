import SEO from "../../components/_common/seo";
import ContentExplanation from "../../components/_content/contentExplanation";
import RecommendedMovie from "../../components/_content/recommendedMovie";

import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import {InferGetServerSidePropsType, GetServerSidePropsContext} from 'next'
import Footer from "../../components/_common/footer";


export type MovieDetailParams = [string, string] | [];


const Contents = ({params}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [value,id] = (params || []) as MovieDetailParams;

  const {data: contentsData} = useSWR(`/api/contents/${value}/${id}`, fetcher, {
    dedupingInterval: 2000,
  })

  console.log(contentsData)

  return (
    <div>
      <SEO title={contentsData?.title}/>
      <ContentExplanation {...contentsData}/>
      <hr className={'line'}/>
      <RecommendedMovie id={id} value={value}/>
      <Footer/>
    </div>
  )
}
export default Contents;


export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return {props: {params: context.query.params}};
};