import { useFormStore } from "../Zustand/Store"
import VideoPlayer from "../Components/VedioPlayer/VideoPlayer";
import Description from "../Components/VedioPlayer/Description";
import { useEffect } from "react";
import BackButton from "../Components/BackButton/BackButton";


const VedioScreen = () => {

    const {dataset} = useFormStore()
  

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    

  return (
    <div>
      <BackButton />
      <VideoPlayer source={dataset.vedio}/>
      <Description dataset={dataset}/>
    </div>
  )
}

export default VedioScreen
