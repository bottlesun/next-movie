import {RecommendedWrap} from "./recommendedMovie.style";
import ContentsList from "../../_common/contentsList";

interface RecommendedMovie {
  id: string | null | undefined
  value: string | null | undefined
}

const RecommendedMovie = ({value, id}: RecommendedMovie) => {
  return (
    <RecommendedWrap>
      <ContentsList title={`Similar ${value}`} dataUrl={`/api/contents/${value}/${id}/similar`} contentsValue={value}/>
      <ContentsList title={`Media`} dataUrl={`/api/contents/${value}/${id}/videos`} contentsValue={value}
                    videos={true}/>
    </RecommendedWrap>
  )
}

export default RecommendedMovie