import './LandingSlider.scss';
import { useEffect, useState } from 'react';
import posterData from '../../../poster.json'
import TextComponent from './TextComponents/TextComponent';

const LandingSlider = () => {

    const [count, setCount] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => (prevCount === 5 ? 0 : prevCount + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className='poster__silder'>
                <div className="poster__image">
                    <img src={posterData.movies[count].posterUrl} alt="Image" />
                </div>
                <TextComponent title={posterData.movies[count].title} rate={posterData.movies[count].IMDb} />
            </div>
        </>
    );
};

export default LandingSlider;


