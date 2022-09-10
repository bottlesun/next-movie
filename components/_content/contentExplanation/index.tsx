import {BG, ContentExplanationWrap, Contents} from "./contentExplanation.style";


type genres = {
  id : number | null | undefined
  name: string | null | undefined
}

const ContentExplanation = ({...contentsData}) => {
  console.log(contentsData)
  const IMG_URL = 'https://image.tmdb.org/t/p/w500' + contentsData.poster_path;
  return (

    <ContentExplanationWrap>
      <BG style={{backgroundImage: `url(${IMG_URL})`}}></BG>
      <div className="inner">
        <div id="ContentExplanation">
          <Contents>
            <h2>{contentsData.title}</h2>
            <div className="genres">
              {
                contentsData.genres?.map( (genres : genres ) => {
                  return  <span key={genres.id} > {genres?.name} </span>
                })
              }
            </div>
            <p>
              {contentsData.overview}
            </p>
          </Contents>
          <img src={IMG_URL} alt={contentsData.title}/>
        </div>
      </div>
    </ContentExplanationWrap>
  )
}

export default ContentExplanation