import React from "react";
import Cabecera from './Cabecera'
import Image from './Image'
import Header from './Header'
import Contact from './Contact'
import Perfil from './Perfil'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Conocimientos from './Conocimientos'
import Idiomas from './Idiomas'
import References from './References'
import Footer from './Footer'
import '../assets/css/MainContent.css';

const MainContent =() =>{
    return(
    <>  <Cabecera/>
        <div className="main-content">
            <Image/>
            <Header/>
            <Contact/>
            <Perfil/>
            <Education/>
            <Experience/>
            <Skills/>
            <Conocimientos/>
            <Idiomas/>
            <References/>
        </div>
        <Footer/>
    </>     
    );
};

export default MainContent;