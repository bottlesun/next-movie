export interface MovieApiDataInterface {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  first_air_date: number
  name: string
  key: string
}


export interface movieList {
  title: string | undefined | null
  dataUrl: string | undefined | null
  contentsValue: string | undefined | null
  videos: boolean | undefined
}
