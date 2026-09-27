import { Link } from 'react-router-dom';
import cornerImg from '../assets/images/footer-corner.webp';

export default function Footer() {
  return (
    <footer>
      <img src={cornerImg} alt="" className="foot-corner-img" />
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              Alex <span>Upholstery</span>
            </div>
            <p>
              Where your furniture's future is re-imagined. Restoring and
              revitalizing beloved pieces since day one.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/catalogue">Catalogue</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/store">Visit Our Store</Link></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#data">Data Protection Notice</a></li>
            </ul>
          </div>

          <div>
            <h4>Find Us</h4>
            <ul>
              <li>Shop 14, Doringkloof Mall</li>
              <li>Cnr. Aster &amp; Lupin Ave</li>
              <li>Centurion, 0157</li>
              <li>+27 63 455 5268</li>
              <li>info@afurnhub.com</li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()}  furn hub Upholstery. All rights reserved.</span>
          <span>Monday – Saturday, 8:00 AM – 5:00 PM</span>
        </div>
      </div>
    </footer>
  );
}