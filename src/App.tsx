import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SignUpStep2 from './Components/SignUpStep2/SignUpStep2';
import Payment from './Components/RegisterPayment/Payment';
import Landing from './Pages/Landing';
import VedioScreen from './Pages/VedioScreen';
import Series from './Pages/SeiresPage/Series';
import SeriesScreen from './Pages/SeiresPage/SeriesScreen';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
import PageNotFound from './Pages/PageNotFound';
import LoadingPage from './Pages/LoadingPage';
import ForgetPassword from './Pages/ForgetPassword';
import SearchPage from './Pages/SearchPage';


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/loading' element={<LoadingPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginLayout />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/step2' element={<SignUpStep2 />}/>
        <Route path='/payment' element={<Payment />}/>
        <Route path='/landing' element={<PrivateRouter>
          <Landing />
        </PrivateRouter>} />
        <Route path='/vedioplayer' element={<VedioScreen />} />
        <Route path='/series' element={<Series />} />
        <Route path='/seriesscreen' element={<SeriesScreen />} />
        <Route path='*' element={<PageNotFound />  } />
        <Route path='/forgetPassword' element={<ForgetPassword />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

function LoginLayout() {
  return (
    <>
      <Header show={false}>
        <SignIn />
      </Header>
      <Footer />
    </>
  );
}


export default App;
