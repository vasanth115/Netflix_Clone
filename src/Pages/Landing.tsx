import LandingHeader from "../Components/LandingHeader/LandingHeader"
import LandingSlider from "../Components/LandingSlider/LandingSlider"
import MovieShow from "../Components/MovieShow/MovieShow"
import SeriesShow from "../Components/MovieShow/SeriesShow"



const Landing = () => {

  
  return (
    <div>
      <LandingHeader />
       <LandingSlider  />
      <MovieShow />
      <SeriesShow />
    </div>
  )
}

export default Landing
