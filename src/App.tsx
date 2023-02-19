import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
// @ts-ignore
import PriceTable from "./components/PriceTable"
import "./App.css"

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PriceTable />} />
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
