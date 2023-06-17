import { socialMedias } from "../data.jsx";
import { pageLinks } from "../data.jsx";

const Footer = () => {
   return (
        <footer className="section footer">
            <ul class="footer-links">
                {pageLinks.map((pageLink) => {
                    return (
                        <li>
                            <a href={pageLink.link} className="footer-link"> {pageLink.text} </a>
                        </li>
                    )
                })}
            </ul>

            <ul class="footer-icons">
                {socialMedias.map((socialMedia) => {
                    return (
                        <li>
                            <a href={socialMedia.link} target="_blank" className="footer-icon">
                                <i className={socialMedia.icon_name} />
                            </a>
                        </li>
                        )
                })}
            </ul>

            <p class="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
   )
}

export default Footer