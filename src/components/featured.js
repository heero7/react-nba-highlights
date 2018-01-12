import React from 'react';

import Slider from 'react-slick';

const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

const generateSlides = ({slides}) => {
    console.log(slides)
    if (slides) {
        return (
            <Slider {...sliderSettings}>
                {slides.map((slide) => {
                    console.log(slide.cover);
                    return (
                        <div key={slide.id} className="item-slider"
                            style={{background:`url(/images/covers/${slide.cover})`}}
                        >
                            <div className="caption">
                                <h4>{slide.topic}</h4>
                                <p>{slide.title}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}

const Featured = (props) => {

    return (
        <div>
            {generateSlides(props)}
        </div>
    )
}

export default Featured;