import React, { useState } from "react";
import { Silder1, Slider2, Slider3 } from "../Images/Images";


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
    }

    const nextSlide = () => {
        const newIndex = (currentIndex === services.length - 1) ? 0 : currentIndex + 1;
        setCurrentindex(newIndex)
    }

    return (
        <div className="slider">
            <button onClick={perSlide}>Prev</button>
            <div className="slide">
                <img src={services[currentIndex].imageUrl} alt={services[currentIndex].title} />
                <h2>{services[currentIndex].title}</h2>
                <p>{services[currentIndex].description}</p>
            </div>
            <button onClick={nextSlide}>Next</button>
        </div>
    )
}

export default  Slider;