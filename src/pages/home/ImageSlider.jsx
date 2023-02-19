/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect, useCallback, useRef } from "react"

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
}

const mediaQuery1920 = window.matchMedia("(max-width: 1920px)")
const mediaQuery1440 = window.matchMedia("(max-width: 1440px)")
const mediaQuery768 = window.matchMedia("(max-width: 768px)")
const mediaQuery480 = window.matchMedia("(max-width: 480px)")
const mediaQuery320 = window.matchMedia("(max-width: 320px)")

const rightArrowStyles = {
    position: "absolute",
    top: "45%",
    transform: "translate(0px, -50%)",
    right: "11rem",
    fontSize: "45px",
    color: "rgb(255, 255, 255)",
    zIndex: "1",
    cursor: "pointer",
}

const leftArrowStyles = {
    position: "absolute",
    top: "45%",
    transform: "translate(0px, -50%)",
    left: "11rem",
    fontSize: "45px",
    color: "rgb(255, 255, 255)",
    zIndex: "1",
    cursor: "pointer",
}

const sliderStyles = {
    position: "relative",
    marginTop: "3rem",
    height: "100%",
    width: "100%",
}

if (mediaQuery1920.matches) {
    Object.assign(slideStyles, {
        height: "90%",
    })
}

if (mediaQuery1440.matches) {
    Object.assign(slideStyles, {
        height: "80%",
    })
}

if (mediaQuery768.matches) {
    Object.assign(slideStyles, {
        height: "70%",
    })
}

if (mediaQuery480.matches) {
    slideStyles.height = "100%"
    slideStyles.width = "100%"
    rightArrowStyles.display = "none"
    leftArrowStyles.display = "none"
    slideStyles.borderRadius = "0px"
}

if (mediaQuery320.matches) {
    slideStyles.height = "80%"
    rightArrowStyles.display = "none"
    leftArrowStyles.display = "none"
}

function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    })
    // Auto change slides every 3 seconds, if user clicks on the arrows, the timer is stopped.
    // If user doesn't click on the arrows, the timer is restarted.
    useEffect(() => {
        const timer = setTimeout(() => {
            goToNext()
        }, 3000)
        return () => clearTimeout(timer)
    }, [currentIndex, goToNext])

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const sliderRef = useRef(null)
    const startXRef = useRef(null)

    function handleTouchStart(event) {
        startXRef.current = event.touches[0].clientX
    }

    function handleTouchEnd(event) {
        const endX = event.changedTouches[0].clientX
        const startX = startXRef.current
        const deltaX = endX - startX
        if (deltaX > 50) {
            goToPrevious()
        } else if (deltaX < -50) {
            goToNext()
        }
    }

    return (
        <div
            style={sliderStyles}
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div>
                {/* Arrows that handle the image changing */}
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div>
            {/* The images */}
            <div style={slideStylesWidthBackground} />
        </div>
    )
}

export default ImageSlider
