import {RecommendedWrap} from "./recommendedMovie.style";
import ContentsList from "../../_common/contentsList";

interface RecommendedMovie {
  id: string | null | undefined
  value : string | null | undefined
}

const RecommendedMovie = ({ value , id}: RecommendedMovie) => {

  return (
    <RecommendedWrap>
      <ContentsList title={`Similar ${value}`} dataUrl={`/api/contents/${value}/${id}/similar`} contentsType={value}/>
    </RecommendedWrap>
  )
}

export default RecommendedMovie