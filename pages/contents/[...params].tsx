import SEO from "../../components/_common/seo";
import ContentExplanation from "../../components/_content/contentExplanation";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { InferGetServerSidePropsType , GetServerSidePropsContext} from 'next'

type MovieDetailParams = [string, string] | [];


const Contents = ({params}: InferGetServerSidePropsType< typeof getServerSideProps>) => {

  const [id] = (params || []) as MovieDetailParams;
  const {data: ContentData} = useSWR(`/api/contents/${id}`, fetcher, {
    dedupingInterval: 2000,
  })

  console.log(ContentData)
  return (
    <div>
      <SEO title={'ContentData'}/>
      <ContentExplanation {...ContentData}/>
    </div>
  )
}
export default Contents;


export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return { props: { params: context.query.params } };
};