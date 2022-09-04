import {ContentExplanationWrap} from "./contentExplanation.style";


const contentExplanation = ({...contentsData}) => {
  console.log(contentsData)
  return (
    <ContentExplanationWrap>
      <div id="ContentExplanation">
        {contentsData.overview}
      </div>
    </ContentExplanationWrap>
  )
}

export default contentExplanation