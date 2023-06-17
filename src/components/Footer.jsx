const Footer = () => {
   return (
        <footer className="section footer">
            <ul class="footer-links">
                <li>
                    <a href="#home" className="footer-link"> home </a>
                </li>
                <li>
                    <a href="#about" className="footer-link"> about </a>
                </li>
                <li>
                    <a href="#services" className="footer-link"> services </a>
                </li>
                <li>
                    <a href="featured" className="footer-link"> featured </a>
                </li>
            </ul>

            <ul class="footer-icons">
                <li>
                <a href="https://www.twitter.com" target="_blank" class="footer-icon"
                    ><i class="fab fa-facebook" />
                </a>
                </li>
                <li>
                <a href="https://www.twitter.com" target="_blank" class="footer-icon"
                    ><i class="fab fa-twitter" />
                </a>
                </li>
                <li>
                <a href="https://www.twitter.com" target="_blank" class="footer-icon"
                    ><i class="fab fa-squarespace" />
                </a>
                </li>
            </ul>
            
            <p class="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
   )
}

export default Footer