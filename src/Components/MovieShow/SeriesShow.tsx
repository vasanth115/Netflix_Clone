import { useState , useEffect } from "react"
import './Series.scss'
import SeiresList from "../SeriesEpisodes/SeiresList"
import { useFormStore } from "../../Zustand/Store"
import { useNavigate } from "react-router-dom"

const SeriesShow = () => {
    const navigate = useNavigate()

    const { setSerieslist } = useFormStore()

    const [ seriesdata , setSeriesdata ] = useState<Season[]>([])

    useEffect(() => {
        const dataFetch = async () => {
            const response = await fetch("http://localhost:2000/series");
            const data = await response.json()
            setSeriesdata(data)
        }

        dataFetch()
    },[])

    const HandleClick = (element: Season) => {
        console.log(element);
        setSerieslist([element])
        navigate('/series')
    }
    

  return (
    <div className="series__list__container">
        <div className="series__container">
            <h2 className="series__title">Series</h2>
            <div className="series__list">
                {
                    seriesdata.map((item) => (
                        <div className="series" key={item.id} onClick={() =>HandleClick(item)}>
                            <img src={item.posterURL} alt={item.name} />
                            <p className="series__name">{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SeriesShow


type Episode = {
    episodeName: string;
    plot: string;
    vedio: string;
  };
  
  type Season = {
    id : number
    name: string;
    year: string;
    episodesNO: string;
    posterURL: string;
    episodes: Episode[];
  };