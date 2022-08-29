import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

const contentExplanation = ({...contentsData}) => {
  console.log(contentsData)
  return (
    <div>
      {contentsData.overview}
    </div>
  )
}

export default contentExplanation