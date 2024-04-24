import SeriesDescription from "../Components/VedioPlayer/SeriesDesceiption/SeriesDescription";
import VideoPlayer from "../Components/VedioPlayer/VideoPlayer";
import { useFormStore } from "../Zustand/Store";
import { useNavigate } from "react-router-dom";

const SeriesScreen = () => {
  const navigate = useNavigate();
  const { episode } = useFormStore();

  if (!episode) {
    navigate("/landing");
    return null; 
  }

  return (
    <div>
      <VideoPlayer source={episode.vedio} />
      <SeriesDescription name={episode.episodeName} />
    </div>
  );
};

export default SeriesScreen;
