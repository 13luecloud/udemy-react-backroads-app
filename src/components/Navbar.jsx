import logoImg from "../images/logo.svg";

const Navbar = () => {
    return(
        <nav className="navbar"> 
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logoImg} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars" />
                    </button>
                </div>

                <ul className="nav-links" id="nav-links">
                    <li>
                        <a href="#home" className="nav-link">
                            {" "}
                            home {" "}
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="nav-link">
                            {" "}
                            about{" "}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar