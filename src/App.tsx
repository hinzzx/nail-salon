import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import "./App.css"

export function App() {
    return <Home />
}

export function WrappedApp() {
    return <App />
}
