import React from "react";
import foto from '../assets/img/foto.jpg'
// css
import '../assets/css/Image.css';

const Image = () =>{
    return (
        <div className="img">
            <img src={foto} alt=""/>
        </div>
    );
};

export default Image;