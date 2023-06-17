import logoImg from "../images/logo.svg";
import { socialMedias } from "../data.jsx"

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="nav-center">
                <div class="nav-header">
                <img src={logoImg} class="nav-logo" alt="backroads" />
                <button type="button" class="nav-toggle" id="nav-toggle">
                    <i class="fas fa-bars"></i>
                </button>
                </div>

                <ul class="nav-links" id="nav-links">
                    <li>
                        <a href="#home" class="nav-link"> home </a>
                    </li>

                    <li>
                        <a href="#about" class="nav-link"> about </a>
                    </li>

                    <li>
                        <a href="#services" class="nav-link"> services </a>
                    </li>

                    <li>
                        <a href="#tours" class="nav-link"> tours</a>
                    </li>
                </ul>

                <ul class="nav-icons">
                    {/* {socialMedias.map((socialMedia) => {
                        return (
                            <li>
                                <a href={socialMedia.link} target="_blank" className="nav-icon">
                                    <i className={"fab fa-".socialMedia.icon_name} />
                                </a>
                            </li>
                        )
                    })} */}
                    <li>
                        <a href="https://www.twitter.com" target="_blank" class="nav-icon">
                            <i class="fab fa-facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" class="nav-icon">
                            <i class="fab fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" class="nav-icon">
                            <i class="fab fa-squarespace" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar