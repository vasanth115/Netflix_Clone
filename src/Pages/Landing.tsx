import Footer from "../Components/Footer/Footer"
import LandingHeader from "../Components/LandingHeader/LandingHeader"
import LandingSlider from "../Components/LandingSlider/LandingSlider"
import MovieShow from "../Components/MovieShow/MovieShow"
import SeriesShow from "../Components/MovieShow/SeriesShow"


const Landing = () => {

  
  return (
    <div>
      <LandingHeader show={true} focus={false} /> 
      <LandingSlider  />
      <MovieShow />
      <SeriesShow />
      <Footer />
    </div>
  )
}

export default Landing
