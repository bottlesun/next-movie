import Image from "next/image";
import {BG, ContentExplanationWrap, Contents, TitleBox} from "./contentExplanation.style";


type genres = {
  id: number | null | undefined
  name: string | null | undefined
}


const ContentExplanation = ({...contentsData}) => {

  const IMG_URL = 'https://image.tmdb.org/t/p/w500/' + contentsData.poster_path;
  const DUMMY = contentsData.poster_path === undefined || contentsData.poster_path === null
  const {title,name,release_date,first_air_date,overview} = contentsData
  return (

    <ContentExplanationWrap>
      <BG style={{backgroundImage: `url(${DUMMY ? '' : IMG_URL})`}}></BG>
      <div className="inner">
        <div id="ContentExplanation">
          <Contents>
            <TitleBox>
              <h2>{title || name}</h2>
              <p>{release_date || first_air_date}
                {
                  release_date ? ' 개봉' : ' 방영일'
                }
              </p>
            </TitleBox>

            <div className="genres">
              {
                contentsData.genres?.map((genres: genres) => {
                  return <span key={genres.id}> {genres?.name} </span>
                })
              }
            </div>
            <p>
              {overview}
            </p>
          </Contents>
          <Image src={DUMMY ? '/images/dummy.png' : IMG_URL} alt={title} width={280} height={350}/>
        </div>
      </div>
    </ContentExplanationWrap>
  )
}

export default ContentExplanation