import { useState, useEffect, useRef } from "react"
import './Series.scss'
import { useFormStore } from "../../Zustand/Store"
import { useNavigate } from "react-router-dom"

const SeriesShow = () => {
    const navigate = useNavigate()

    const seriesRef = useRef<HTMLDivElement>(null);


    const [isHovered, setIsHovered] = useState(false);

    const { setSerieslist } = useFormStore()

    const [seriesdata, setSeriesdata] = useState<Season[]>([])

    useEffect(() => {
        const dataFetch = async () => {
            const response = await fetch("http://localhost:2000/series");
            const data = await response.json()
            setSeriesdata(data)
        }

        dataFetch()
    }, [])


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleScroll = (scrollOffset: number) => {

        if (seriesRef.current) {
            // Calculate new scroll position with limit
            const containerWidth = seriesRef.current.clientWidth;
            const totalScrollWidth = seriesRef.current.scrollWidth - containerWidth;
            const newScrollPosition = Math.max(0, Math.min(totalScrollWidth, seriesRef.current.scrollLeft + scrollOffset));
            seriesRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
        }
        isScrollEnd
    };

    const HandleClick = (element: Season) => {
        setSerieslist([element])
        navigate('/series')
    }

    const isScrollStart = () => {
        if (seriesRef.current) {
            return seriesRef.current.scrollLeft === 0;
        }
        return true;
    };

    const isScrollEnd = () => {
        if (seriesRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = seriesRef.current;
            return Math.round(scrollLeft + clientWidth) >= scrollWidth;
        }
        return true;
    };




    return (
        <div className="series__list__container">
            <div className="series__container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <h2 className="series__title">Series</h2>
                <div className="series__list" ref={seriesRef}>
                    {
                        seriesdata.map((item) => (
                            <div className="series" key={item.id} onClick={() => HandleClick(item)}>
                                <img src={item.posterURL} alt={item.name} />
                                <p className="series__name">{item.name}</p>
                            </div>
                        ))
                    }
                </div>
                <button className={`scrolling__button left ${isHovered && !isScrollStart() ? '' : 'hidden'}`} onClick={() => handleScroll(-500)} disabled={isScrollStart()}>
                    &lt;
                </button>
                <button className={`scrolling__button right ${isHovered && !isScrollEnd() ? '' : 'hidden'}`} onClick={() => handleScroll(500)} disabled={isScrollEnd()}>
                    &gt;
                </button>
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
    id: number
    name: string;
    year: string;
    episodesNO: string;
    posterURL: string;
    episodes: Episode[];
};
