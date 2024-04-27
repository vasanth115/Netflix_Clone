import BackButton from "../../Components/BackButton/BackButton"
import LandingHeader from "../../Components/LandingHeader/LandingHeader"
import SeiresList from "../../Components/SeriesEpisodes/SeiresList"

const Series = () => {
  return (
    <div>
      <LandingHeader show={false} focus={false} />
      <BackButton />
      <SeiresList />
    </div>
  )
}

export default Series
