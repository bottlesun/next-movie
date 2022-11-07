import SEO from "../../components/_common/seo";
import ContentExplanation from "../../components/_content/contentExplanation";
import RecommendedMovie from "../../components/_content/recommendedMovie";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import {InferGetServerSidePropsType, GetServerSidePropsContext} from 'next'
import useLogin from "../../hooks/useLogin";


export type MovieDetailParams = [string, string] | [];


const Contents = ({params}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useLogin();
  const [value, id] = (params || []) as MovieDetailParams;

  const {data: contentsData} = useSWR(`/api/contents/${value}/${id}`, fetcher, {
    dedupingInterval: 2000,
  })

  return (
    <div>
      <SEO title={contentsData?.title}/>
      <ContentExplanation {...contentsData} id={id} value={value}/>
      <hr className={'line'}/>
      <RecommendedMovie id={id} value={value}/>
    </div>
  )
}
export default Contents;


export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return {props: {params: context.query.params}};
};