import logo from "/react.svg"

export default function Navbar(props) {
    return (
        <nav className={props.lightMode ? "light-nav" : ""}>
            <div className="nav-container">
                <div className="title">
                    <img src={logo} />
                    <h3 className="name">ReactFacts</h3>
                </div>

                <div className="toggler" onClick={props.toggleLightMode}>
                    <p className={props.lightMode ? "toggler-dark" : "toggler-light"}>Light</p>
                    <div className={props.lightMode ? "toggler-slider toggler-slider-light" : "toggler-slider"}>
                        <div className="toggler-slider-circle"></div>
                    </div>
                    <p className={props.lightMode ? "toggler-light" : "toggler-dark"}>Dark</p>
                </div>
            </div>
        </nav>
    )
}