import { useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [lightMode, setLightMode] = useState(false)

    function toggleLightMode() {
        setLightMode(prevState => !prevState)
        document.body.classList.toggle("light")
    }

    return (
        <>
            <Navbar lightMode={lightMode} toggleLightMode={toggleLightMode} />
            <Main lightMode={lightMode} />
        </>
    )
}