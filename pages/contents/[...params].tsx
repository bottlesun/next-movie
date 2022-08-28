import SEO from "../../components/_common/seo";
import ContentExplanation from "../../components/_content/contentExplanation";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { InferGetServerSidePropsType , GetServerSidePropsContext} from 'next'

type MovieDetailParams = [string, string] | [];


const Contents = ({params}: InferGetServerSidePropsType< typeof getServerSideProps>) => {
console.log(params)
  const [title,id] = (params || []) as MovieDetailParams;
  const { data:contentsData } = useSWR([`/api/contents/${id}`, 'article', 2], fetcher)
  return (
    <div>
      <SEO title={title as string}/>
      <ContentExplanation />
    </div>
  )
}
export default Contents;


export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return { props: { params: context.query.params } };
};