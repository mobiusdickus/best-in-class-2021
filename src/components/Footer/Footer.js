import image from '../../assets/img/footer-logo@2x.png';

import './Footer.css';



function Footer() {
  return (
    <footer className="bg-dark">
      <div className="footer footer-container">
        <div className="footer-content">
          <div className="left">
            <div className="footer-logo">
              <a href="http://superunion.com"
                target="_blank"
                rel="noreferrer">
                <img className="responsive"
                  src={ image }
                  alt="Foot Logo"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
