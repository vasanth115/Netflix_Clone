import  './VedioPlayer.scss'

const Description = ({ dataset }: { dataset: TypePoster }) => {
  const { id, title, year, runtime, genres, director, actors, plot, posterUrl, vedio } = dataset;
  return (
    <div className='description'>
       <h1 className='description__title'>{title} | {year} | {actors}</h1>
       <h3 className='description__director'>Directed By : {director}</h3>
       <h5 className='description__genres'> Genres : {genres}</h5>
       <p className='description__plot'>{plot}</p>
    </div>
  );
}

export default Description;

type TypePoster = {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string;
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
  vedio: string;
}
