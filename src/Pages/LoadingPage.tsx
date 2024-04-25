import { useEffect } from "react";
import Loading from "../Components/LoadingPage/Loading"
import { useNavigate } from "react-router-dom"

const LoadingPage = () => {

    const navigate = useNavigate();

    useEffect(()=> {
        const timer = setTimeout(() => {
            navigate('/landing')
        }, 3000);

        return () => clearTimeout(timer);
    },[navigate])
  return (
    <div>
      <Loading />
    </div>
  )
}

export default LoadingPage
