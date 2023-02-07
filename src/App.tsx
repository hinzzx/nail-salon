import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import "./App.css"

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export function WrappedApp() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    )
}
