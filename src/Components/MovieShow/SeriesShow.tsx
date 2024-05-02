import { useState, useEffect, useRef } from "react";
import './Series.scss';
import { useFormStore } from "../../Zustand/Store";
import useSeriesApi from "../../CustomeHooks/useSeriesApi";
import { useNavigate } from "react-router-dom";

const SeriesShow = () => {
    const navigate = useNavigate();
    const seriesRef = useRef<HTMLDivElement>(null);
    const { seriesdata } = useSeriesApi()
    const { setSerieslist } = useFormStore();
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (seriesRef.current) {
                const { scrollLeft, clientWidth, scrollWidth } = seriesRef.current;
                const isAtStart = scrollLeft === 0;
                const isAtEnd = scrollLeft + clientWidth === scrollWidth;
                setShowLeftArrow(!isAtStart);
                setShowRightArrow(!isAtEnd);
            }
        };

        if (seriesRef.current) {
            seriesRef.current.addEventListener("scroll", handleScroll);
            // Initial check for arrows visibility
            handleScroll();
        }

        return () => {
            if (seriesRef.current) {
                seriesRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const HandleClick = (element: Season) => {
        setSerieslist([element]);
        navigate('/series');
    };

    return (
        <div className="series__list__container">
            <div
                className="series__container"
                onMouseEnter={() => {
                    setShowLeftArrow(true);
                    setShowRightArrow(true);
                }}
                onMouseLeave={() => {
                    setShowLeftArrow(false);
                    setShowRightArrow(false);
                }}
            >
                <h2 className="series__title">Series</h2>
                <div className="series__list" ref={seriesRef}>
                    {seriesdata.map((item) => (
                        <div className="series" key={item.id} onClick={() => HandleClick(item)}>
                            <img src={item.posterURL} alt={item.name} />
                            <p className="series__name">{item.name}</p>
                        </div>
                    ))}
                </div>
                <button
                    className={`scrolling__button left ${showLeftArrow ? '' : 'hidden'}`}
                    onClick={() => seriesRef.current?.scrollBy({ left: -500, behavior: 'smooth' })}
                    disabled={!showLeftArrow}
                >
                    &lt;
                </button>
                <button
                    className={`scrolling__button right ${showRightArrow ? '' : 'hidden'}`}
                    onClick={() => seriesRef.current?.scrollBy({ left: 500, behavior: 'smooth' })}
                    disabled={!showRightArrow}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default SeriesShow;

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
