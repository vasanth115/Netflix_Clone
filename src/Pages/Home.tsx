import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Jumbotran from '../Components/Jumbotran/Jumbotran'
import Accordian from '../Components/accordian/Accordian'

const Home = () => {
  return (
    <div>
      <Header show={true}/>
      <Jumbotran />
      <Accordian />
      <Footer />
    </div>
  )
}

export default Home
