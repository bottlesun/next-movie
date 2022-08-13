import SEO from "../components/_common/seo";
import MainSlider from "../components/_main/mainSlider";
import UpcomingMovie from "../components/_main/upcomingMovie";


export default function Home() {



  return (
    <>
      <SEO title={'Main'}/>
      <MainSlider/>

      <div className={'container'}>
        <div className={'inner'}>
          <UpcomingMovie/>

        </div>
      </div>
    </>
  )
}

