/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react"
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"
// @ts-ignore
import ImageSlider from "./ImageSlider"

import {
    MainContainer,
    ContentContainer,
    ThreeImagesContainer,
    ImageContainer,
    Title,
    NavBar,
    Button,
    SecondSectionContainer,
    // @ts-ignore
} from "./Home.styles"

import img1 from "../../assets/three-image-one.jpg"
import img2 from "../../assets/three-image-two.jpg"
import img3 from "../../assets/three-image-three.jpg"

function Home() {
    const sectionRef = useRef()

    const scrollToSecondSection = () => {
        // @ts-ignore
        sectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    const slides = [
        { url: `${img1}`, title: "beach" },
        { url: `${img2}`, title: "boat" },
        { url: `${img3}`, title: "forest" },
        { url: `${img2}`, title: "city" },
        { url: `${img1}`, title: "italy" },
    ]

    return (
        <MainContainer>
            <NavBar>
                <Title>
                    <Typewriter
                        onInit={(typewriter: any) => {
                            typewriter.typeString("Gabbie Nails").start()
                        }}
                    />
                </Title>
            </NavBar>

            <ContentContainer>
                <Button
                    as={motion.button}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.875, delay: 0.25 }}
                >
                    Запишете час ✨
                </Button>
                <Button
                    as={motion.button}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.875, delay: 0.75 }}
                    onClick={scrollToSecondSection}
                >
                    Ценоразпис - услуги 💅
                </Button>
            </ContentContainer>

            <ThreeImagesContainer>
                <ImageSlider slides={slides} />
            </ThreeImagesContainer>

            <SecondSectionContainer ref={sectionRef}>
                Hey
            </SecondSectionContainer>
        </MainContainer>
    )
}

export default Home
