import usePosterApi from "../../CustomeHooks/usePosterApi";
import { useFormStore } from "../../Zustand/Store";
import './SearchContent.scss'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSeriesApi from "../../CustomeHooks/useSeriesApi";

const SearchContent = () => {
    const navigate = useNavigate()
    const { posterData } = usePosterApi();
    const { searchTerm, setDataset , setSerieslist } = useFormStore();
    const { seriesdata } = useSeriesApi()
    const [movieArray, setMovieArray] = useState<TypePoster[]>([]);
    const [seriesMovies , setSeriresMovie ] = useState<Season[]>([])

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setMovieArray([]);
            return;
        }

        const filteredMovies = posterData.filter((item) => (
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.year.includes(searchTerm.toLowerCase()) ||
            item.genres.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.actors.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.director.toLowerCase().includes(searchTerm.toLowerCase())
        ));
        const seriesMovies = seriesdata.filter((item) => (
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.year.toLowerCase().includes(searchTerm.toLowerCase())
        ))
        setSeriresMovie(seriesMovies)
        setMovieArray(filteredMovies);
    }, [searchTerm, posterData]);

    if (searchTerm.trim() === "") {
        return null;
    }

    const handleClick = (id: number) => {
        const data = posterData.find(movie => movie.id === id);
        if (data) {
            setDataset(data);
            navigate('/vedioplayer');
        }
    };

    const HandleClick = (element: Season) => {
        setSerieslist([element]);
        navigate('/series');
    };

    return (
        <div className="search__content">
            {movieArray.map((row) => (
                <div className="serach__movie" key={row.id} onClick={() => handleClick(row.id)}>
                    <img src={row.posterUrl} alt={row.title} className="search__image" />
                    <div className="serach__context">
                        <h1 className="search__title">{row.title}</h1>
                        <h2 className="search__year">Year : {row.year}</h2>
                        <h2 className="search__genre">Genre : {row.genres}</h2>
                        <p className="search__actor">Cast : {row.actors}</p>
                        <p className="search__director">Directed : {row.director}</p>
                    </div>
                </div>
            ))}
            {
                seriesMovies.map((row) => (
                    <div className="serach__movie" key={row.id} onClick={() => HandleClick(row)}>
                        <img src={row.posterURL} alt={row.name} className="search__image" />
                        <div className="serach__context">
                        <h1 className="search__title">{row.name}</h1>
                        <h2 className="search__year">Year : {row.year}</h2>
                        <h2 className="search__genre">Genre : Anime</h2>
                        <p className="search__director">Directed : Masashi Kishimoto</p>
                        <p className="search__actor">Number Of Episodes : {row.episodesNO}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default SearchContent;

type TypePoster = {
    id: number
    title: string
    year: string
    runtime: string
    genres: string
    director: string
    actors: string
    plot: string
    posterUrl: string
    vedio: string
}


type Episode = {
    episodeName: string;
    plot: string;
    vedio: string;
};

type Season = {
    id: number;
    name: string;
    year: string;
    episodesNO: string;
    posterURL: string;
    episodes: Episode[];
};