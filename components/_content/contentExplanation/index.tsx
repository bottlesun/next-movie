import Image from "next/image";
import {BG, ContentExplanationWrap, Contents, TitleBox} from "./contentExplanation.style";


type genres = {
  id: number | null | undefined
  name: string | null | undefined
}

const ContentExplanation = ({...contentsData}) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500' + contentsData.poster_path;
  return (

    <ContentExplanationWrap>
      <BG style={{backgroundImage: `url(${IMG_URL})`}}></BG>
      <div className="inner">
        <div id="ContentExplanation">
          <Contents>
            <TitleBox>
              <h2>{contentsData.title || contentsData.name} </h2>
              <p>{contentsData.release_date || contentsData.first_air_date}
                {
                  contentsData.release_date ? ' 개봉' : ' 방영일'
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
              {contentsData.overview}
            </p>
          </Contents>
          <Image src={IMG_URL} alt={contentsData.title} width={280} height={350}/>
        </div>
      </div>
    </ContentExplanationWrap>
  )
}

export default ContentExplanation