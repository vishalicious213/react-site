import { useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [lightMode, setLightMode] = useState(false)

    return (
        <>
            <Navbar lightMode={lightMode} />
            <Main lightMode={lightMode} />
        </>
    )
}