import './SeriesDescription.scss'


const SeriesDescription = ({name} : TypeProps) => {
  return (
    <div>
      <div className="series__description">
        <h1>{name} | Anime </h1>
        <h2>Directed By : Masashi Kishimoto </h2>
      </div>
    </div>
  )
}

export default SeriesDescription

type TypeProps = {
    name : string
}