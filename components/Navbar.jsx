import logo from "/react.svg"

export default function Navbar() {
    return (
        <nav>
            <div className="title">
                <img src={logo} />
                <h3 className="name">ReactFacts</h3>
            </div>
            <h4 className="title">React Course - Project 1</h4>
        </nav>
    )
}