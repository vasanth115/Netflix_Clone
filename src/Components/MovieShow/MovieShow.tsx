// Landing Page Movie List Component

import { useState, useEffect, useRef } from "react";
import './Movies.scss'; 
import { useFormStore } from "../../Zustand/Store";
import usePosterApi from "../../CustomeHooks/usePosterApi";
import { useNavigate } from "react-router-dom";

const movieNameArray = ["Fantasy", "Crime", "Adventure", "Thriller", "Animation", "Mystery", "Biography", "Action", "War" , "Romance" , "Drama" , "Horror" , "Comedy"];

const MovieShow = () => {
    const navigate = useNavigate();
    const { posterData } = usePosterApi();
    const { setDataset } = useFormStore();

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [scrollPositions, setScrollPositions] = useState<number[]>(Array(movieNameArray.length).fill(0));

    // Create a separate useRef for each movie list
    const movieListRefs = movieNameArray.map(() => useRef<HTMLDivElement>(null));

    useEffect(() => {
        const handleScroll = (index: number) => {
            return () => {
                if (movieListRefs[index].current) {
                    const newPosition = movieListRefs[index].current!.scrollLeft;
                    setScrollPositions(prev => prev.map((pos, i) => (i === index ? newPosition : pos)));
                }
            };
        };

        const scrollHandlers = movieListRefs.map((ref, index) => {
            return ref.current ? handleScroll(index) : undefined;
        });

        scrollHandlers.forEach((handler, index) => {
            if (handler) {
                movieListRefs[index].current?.addEventListener('scroll', handler);
            }
        });

        return () => {
            scrollHandlers.forEach((handler, index) => {
                if (handler) {
                    movieListRefs[index].current?.removeEventListener('scroll', handler);
                }
            });
        };
    }, [movieListRefs]);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

 const handleClick = (id: number) => {
        const data = posterData.find(movie => movie.id === id);
        if (data) {
            setDataset(data);
            navigate('/vedioplayer');
        }
    };

    const isScrollStart = (index: number) => {
        return scrollPositions[index] === 0;
    };

    const isScrollEnd = (index: number) => {
        const container = movieListRefs[index].current;
        if (container) {
            const { scrollLeft, clientWidth, scrollWidth } = container;
            return Math.round(scrollLeft + clientWidth) >= scrollWidth;
        }
        return true; // If no container or not scrolled yet, consider it at the end
    };

    const handleScroll = (ref: React.RefObject<HTMLDivElement>, scrollOffset: number) => {
        if (ref.current) {
            const newPosition = ref.current.scrollLeft + scrollOffset;
            ref.current.scrollTo({ left: newPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className="movie__list__container">
            {movieNameArray.map((genre, index) => (
                <div
                    className="movie__container"
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <h2 className="movie__genres">{genre} Movies</h2>
                    <div className="movie__list" ref={movieListRefs[index]}>
                        {posterData.map((movie) => (
                            movie.genres.includes(genre) && (
                                <div className="movie" key={movie.id} onClick={() => handleClick(movie.id)}>
                                    <img src={movie.posterUrl} alt={movie.title} />
                                    <div className="movie__title">{movie.title}</div>
                                </div>
                            )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                        ))}
                    </div>
                    {hoveredIndex === index && (
                        <>
                            <button
                                className={`scroll__button left ${isScrollStart(index) ? 'hidden' : ''}`}
                                onClick={() => handleScroll(movieListRefs[index], -500)}
                                disabled={isScrollStart(index)} // Disable left button on scroll start
                            >
                                &lt;
                            </button>
                            <button
                                className={`scroll__button right ${isScrollEnd(index) ? 'hidden' : ''}`}
                                onClick={() => handleScroll(movieListRefs[index], 500)}
                                disabled={isScrollEnd(index)} // Disable right button on scroll end
                            >
                                &gt;
                            </button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MovieShow;
