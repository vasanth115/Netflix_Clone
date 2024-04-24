import { useState , useEffect } from "react"

const usePosterApi = () => {
    const [posterData , SetposterData ] = useState<TypePoster[]>([]);
    const [error , setError] = useState('')
    const [loading , setloading] = useState(true)

    useEffect(()=>{

        const fetchPosterData = async () => {
          try{
            const response = await fetch("http://localhost:1000/movies")
            const poster_response = await response.json()
            SetposterData(poster_response)
            setloading(false)
          } catch (error : any) {
            setError(error)
            console.log(error);
          }
        }

        fetchPosterData()
     },[])

  return { posterData , loading , error } ;
}

export default usePosterApi

type TypePoster = {
    id : number
    title : string
    year : string
    runtime : string
    genres : string
    director : string
    actors : string
    plot : string
    posterUrl : string
    vedio : string
}