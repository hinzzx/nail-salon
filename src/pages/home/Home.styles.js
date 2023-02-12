/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import styled from "styled-components"
import img from "../../assets/home-background-top-content.jpg"
// Variables

// Navbar
const navBarHeight = "120px"

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat no-repeat;
`

export const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: ${navBarHeight};
    width: 100%;
    background-color: rgba(255, 255, 255, 0);
`

export const Title = styled.h1`
    font-size: 4.5rem;
    color: white;
    padding-left: 20px;
    padding-top: 30px;

    @media (max-width: 1440px) {
        font-size: 3.5rem;
    }

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    height: calc(100% - ${navBarHeight});
    width: 100%;
`

export const ThreeImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: #ffedf4;

    @media (max-width: 768px) {
        flex-direction: column;
        height: 100%;
        gap: 1rem;
    }
`

export const ImageContainer = styled.img`
    position: relative;
    height: 95%;
    width: 33.33333%;
    border-radius: 0.5rem;
    transition: transform 0.4s;
    -webkit-box-shadow: 0px -1px 90px -24px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px -1px 90px -24px rgba(0, 0, 0, 1);
    box-shadow: 0px -1px 90px -24px rgba(0, 0, 0, 1);
    overflow-x: hidden;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        position: absolute;
        width: 80%;
        height: 45%;
        margin-top: 2rem;
        overflow: hidden;
        -webkit-box-shadow: 0px -1px 30px -24px rgba(0, 0, 0, 1);
        -moz-box-shadow: 0px -1px 30px -24px rgba(0, 0, 0, 1);
        box-shadow: 0px -1px 30px -24px rgba(0, 0, 0, 1);
    }
`

export const Button = styled.button`
    border-radius: 5px;
    width: 20%;
    height: 12%;
    padding: 0 0.4rem;
    background-color: #eeb0b0;
    white-space: pre-line;
    font-family: "Oswald";
    color: white;
    border: none;
    font-size: 1.5rem;
    -webkit-box-shadow: 0px -1px 90px -24px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px -1px 90px -24px rgba(0, 0, 0, 1);
    box-shadow: 0px -1px 90px -24px rgba(0, 0, 0, 1);

    &:hover {
        background-color: #f5c6c6;
        cursor: pointer;
    }

    @media (max-width: 1024px) {
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        width: 30%;
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        width: 35%;
        height: 10%;
        font-size: 0.8rem;
    }
`

export const SecondSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    align-items: center;
    height: 100vh;
    background-color: #ffedf4;
`
