import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <strong>KD Tech Studio</strong>

          <p>
            Modern websites and web systems for businesses
            that want a stronger online presence.
          </p>
        </div>

        <div className="footer__links">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer__bottom">
        © 2026 KD Tech Studio. All rights reserved.
      </div>
    </footer>
  );
}