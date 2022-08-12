import SEO from "../components/_common/seo";
import MainSlider from "../components/_main/mainSlider";
import LatestMovie from "../components/_main/latestMovie";


export default function Home() {



  return (
    <>
      <SEO title={'Main'}/>
      <MainSlider/>

      <div className={'container'}>
        <div className={'inner'}>
          <LatestMovie/>

        </div>
      </div>
    </>
  )
}

