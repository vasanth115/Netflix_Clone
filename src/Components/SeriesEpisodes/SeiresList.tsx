import './SeriesList.scss';
import { useFormStore } from '../../Zustand/Store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const SeiresList = () => {

    const { serieslist , setEpisode } = useFormStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (serieslist.length === 0) {
            navigate("/loading");
        }
    }, [serieslist, navigate]);


    const HandleEpisode = (episode : Episode) => {
        setEpisode(episode)
        navigate("/seriesscreen");
    }
    
    return (
        <div className='serieslist'>
            {serieslist.length > 0 ? (
                <div className="series__episodes">
                    {serieslist[0].episodes.length > 0 ? (
                        serieslist[0].episodes.map((episode) => (
                            <div className="series" key={episode.episodeName} onClick={() =>HandleEpisode(episode)}>
                                <div className="series__image">
                                    <img src={serieslist[0].posterURL} alt={episode.episodeName} />
                                </div>
                            <div className="series__content">
                               <h1>{episode.episodeName}</h1>
                                <p>{episode.plot}</p>
                            </div>
                            </div>
                        ))
                    ) : (
                        <p>No episodes available</p>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
            {serieslist.length > 0 && (
                <div className="series__details">
                    <div className="detail__image">
                        <img src={serieslist[0].posterURL} alt={serieslist[0].name} />
                    </div>
                    <h1 className='series__fullname'>{serieslist[0].name}</h1>
                    <h2 className='series__season'>Released On: {serieslist[0].year}</h2>
                </div>
            )}
        </div>
    );
}

export default SeiresList;


type Episode = {
    episodeName: string;
    plot: string;
    vedio: string;
  };