import LandingHeader from "../Components/LandingHeader/LandingHeader"
import LandingSlider from "../Components/LandingSlider/LandingSlider"
import MovieShow from "../Components/MovieShow/MovieShow"
import SeriesShow from "../Components/MovieShow/SeriesShow"
import { useEffect } from "react"


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
