import React from 'react';
import {Routes,Route, useLocation} from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Home from './Home';
import NavBar from './components/NavBar';
import Registration from './Registration';
import Login from './Login';
import About from './About';
import Error from "./Error";
import Services from './Services';
import PortfolioForm from './PortfolioForm';
import ResultLinks from './ResultLinks';
import SourceOne from './SourceOne';
import SourceTwo from './SourceTwo';
import PreviewOne from './PreviewOne';
import PreviewTwo from './PreviewTwo';
import Update from './Update';

const Main = () => {
    const location = useLocation()
    const shownavbar = location.pathname !== '/' && 
                       location.pathname !== '/register' && 
                       location.pathname !== '/login' &&
                       location.pathname !== '/preview-1' &&
                       location.pathname !== '/preview-2' &&
                       location.pathname !== '*' ;

  return (
    <>
        { shownavbar ? <NavBar/> : null}
        <Routes>
            <Route path='/' element={<HeroSection/>} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/portfolioform' element={<PortfolioForm/>}/>
            <Route path='/register' element={<Registration/>}/>
            <Route path='/links' element={<ResultLinks/>}/>
            <Route path='/update' element={<Update/>}/>
            <Route path='/source-1' element={<SourceOne/>}/>
            <Route path='/source-2' element={<SourceTwo/>}/>
            <Route path='/preview-1' element={<PreviewOne/>}/>
            <Route path='/preview-2' element={<PreviewTwo/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Services/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </>
  )
}

export default Main
