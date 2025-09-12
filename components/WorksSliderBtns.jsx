"use client";

import { useSwiper } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


const WorksSliderBtns = ({containerStyles,btnStyles,iconsStyles, disablePrev = false, disableNext = false}) => {

    const  swiper = useSwiper();

    const baseDisabledClass = "opacity-50 cursor-not-allowed pointer-events-none";

    return <div className={containerStyles}>
        <button
            className={`${btnStyles} ${disablePrev ? baseDisabledClass : ""}`}
            onClick={() => { if (!disablePrev) swiper.slidePrev(); }}
            aria-label="Previous slide"
            disabled={disablePrev}
        >
            <BsChevronLeft className={iconsStyles}/>
        </button>
        <button
            className={`${btnStyles} ${disableNext ? baseDisabledClass : ""}`}
            onClick={() => { if (!disableNext) swiper.slideNext(); }}
            aria-label="Next slide"
            disabled={disableNext}
        >
            <BsChevronRight className={iconsStyles}/>
        </button>
    </div>

}

export default WorksSliderBtns;
