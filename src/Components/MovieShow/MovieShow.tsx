import usePosterApi from "../../CustomeHooks/usePosterApi";
import './Movies.scss'
import { useFormStore } from "../../Zustand/Store";
import { useNavigate } from "react-router-dom";

const movieNameArray = [ "Fantasy" , "Crime" , "Adventure" , "Thriller" , "Animation" , "Mystery" , "Biography" , "Action" , "War"] ;

const MovieShow = () => {
    const navigate = useNavigate()
    const { posterData } = usePosterApi();
    const { setDataset } = useFormStore()

    const HandleClick = (id : number) => {
        const data  = posterData[id-1]
        setDataset(data)
        navigate('/vedioplayer')
    }


    return (
        <div className="movie__list__container">
           {
             movieNameArray.map((item,index) => (
                <div className="movie__container" key={index}>
                <h2 className="movie__genres">{item} Movies</h2>
                <div className="movie__list" key={index}>
                    {posterData.map((movie) => (
                        movie.genres.includes(item) && (
                            <div className="movie" key={movie.id} onClick={() => HandleClick(movie.id)}>
                                <img src={movie.posterUrl} alt={movie.title} />
                                <div className="movie__title">{movie.title}</div>
                            </div>
                        )
                    ))}
                </div>
                </div>
             ))
           }
        </div>
    );
}

export default MovieShow
