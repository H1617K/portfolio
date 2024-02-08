import React, { useState } from "react";
import { Silder1, Slider2, Slider3 } from "../Images/Images";
import '../Styled/Slider.css'


const Slider = () => {
    const [currentIndex, setCurrentindex] = useState(0);

    const services = [
        {
            title: "Web Development",
            description: "Create responsive and user-friendly websites tailored to your business needs.",
            imageUrl: Silder1,
          },
          {
            title: "Mobile App Development",
            description: "Build native or cross-platform mobile applications for iOS and Android.",
            imageUrl: Slider2,
          },
          {
            title: "Cloud Services",
            description: "Leverage cloud computing solutions to scale your IT infrastructure and improve efficiency.",
            imageUrl: Slider3,
          },
    ];
    
    const perSlide = () => {
        const newIndex = (currentIndex === 0) ? services.length - 1 : currentIndex - 1;
        setCurrentindex(newIndex);
        // Add fade-out class
        document.querySelector('.slide').classList.add('fade-out');
        // Remove fade-out class after the animation duration 
        setTimeout(() => {
            document.querySelector('.slide').classList.remove('fade-out');
        }, 500);
    }

    const nextSlide = () => {
        const newIndex = (currentIndex === services.length - 1) ? 0 : currentIndex + 1;
        setCurrentindex(newIndex);
        // Add fade-out class
        document.querySelector('.slide').classList.add('fade-out');
        // Remove fade-out class after the animation duration 
        setTimeout(() => {
            document.querySelector('.slide').classList.remove('fade-out');
        }, 500);
    }


    return (
        <div className="slider">
        <div className="button-container">
            <button className="prev" onClick={perSlide}>Prev</button>
        </div>
        <br/>
        <div className="slide">
            <img src={services[currentIndex].imageUrl} alt={services[currentIndex].title} />
            <h2>{services[currentIndex].title}</h2>
            <p>{services[currentIndex].description}</p>
        </div>
        <div className="button-container">
            <button className="next" onClick={nextSlide}>Next</button>
        </div>
    </div>
    )
}

export default  Slider;