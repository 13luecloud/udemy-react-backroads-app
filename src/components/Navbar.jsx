import logoImg from "../images/logo.svg";
import { socialMedias } from "../data.jsx";
import { pageLinks } from "../data.jsx";

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
                    {pageLinks.map((pageLink) => {
                        return (
                            <li>
                                <a href={pageLink.link} className="nav-link"> {pageLink.text} </a>
                            </li>
                        )
                    })}
                </ul>

                <ul class="nav-icons">
                    {socialMedias.map((socialMedia) => {
                        return (
                            <li>
                                <a href={socialMedia.link} target="_blank" className="nav-icon">
                                    <i className={socialMedia.icon_name} />
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar