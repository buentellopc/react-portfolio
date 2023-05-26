// import logo from "../logo.svg";
import './Header.css'
import Link from "./Link";
function Header({logo}) {
    return <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link title={"Learn React"} url={"https://reactjs.org"} />
    </header>
}

export default Header