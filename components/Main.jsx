export default function Main(props) {
    return (
        <main className={props.lightMode ? "light light-text" : ""}>
            <div className="main-container">
                <h1 className={props.lightMode ? "main-title light-text" : "main-title"}>Facts about React</h1>
                <ul className={props.lightMode ? "main-facts light-text" : "main-facts"}>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </main>
    )
}