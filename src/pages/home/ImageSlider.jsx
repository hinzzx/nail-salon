/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react"

const slideStyles = {
    width: "70%",
    height: "80%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // center them horizontally with position absolute
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    // add a transition to make it smooth
    transition: "all 0.5s ease",

    // make it responsive for 1440px, 768px, 480px screens. Change the height mainly.
    "@media (max-width: 1440px)": {
        height: "70%",
    },
    "@media (max-width: 768px)": {
        height: "60%",
    },
    "@media (max-width: 480px)": {
        height: "50%",
    },
}

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
}

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
}

const sliderStyles = {
    position: "relative",
    height: "100%",
    width: "100%",
}

function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    return (
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div>
            <div style={slideStylesWidthBackground} />
        </div>
    )
}

export default ImageSlider
