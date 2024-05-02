// API Call for Series list

import { useEffect , useState } from "react";

const useSeriesApi = () => {

    const [seriesdata, setSeriesdata] = useState<Season[]>([])

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const response = await fetch("http://localhost:2000/series");
                if (!response.ok) {
                    throw new Error('Failed to fetch series data');
                }
                const data = await response.json();
                setSeriesdata(data);
            } catch (error) {
                console.error('Error fetching series data:', error);
            }
        };

        dataFetch();
    }, []);

    return { seriesdata } ;
}

export default useSeriesApi


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