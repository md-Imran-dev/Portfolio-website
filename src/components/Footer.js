import React from "react";
import "./Footer.css";
import StarIcon from "../assets/Star.png"; // Assuming you have the same star icon

const Footer = () => {
  const scrollingText = [
    "FOLLOW",
    "FIGMA",
    "DESIGNER",
    "DEVELOPER",
    "FOLLOW",
    "FIGMA",
    "DESIGNER",
    "DEVELOPER",
  ];

  const socialLinks = [
    { name: "Dribbble", url: "https://dribbble.com" },
    { name: "Behance", url: "https://behance.net" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
  ];

  return (
    <footer className="footer" id="contact">
      {/* Scrolling Text */}
      <div className="scrolling-text-container">
        <div className="scrolling-text">
          {scrollingText.map((text, index) => (
            <React.Fragment key={index}>
              <span className="text-item">{text}</span>
              {index < scrollingText.length - 1 && (
                <img src={StarIcon} alt="Star" className="star-separator" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="scrolling-text" aria-hidden="true">
          {scrollingText.map((text, index) => (
            <React.Fragment key={`duplicate-${index}`}>
              <span className="text-item">{text}</span>
              {index < scrollingText.length - 1 && (
                <img src={StarIcon} alt="Star" className="star-separator" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="container">
          {/* CTA Section */}
          <div className="footer-cta">
            <h2 className="cta-title">LET'S TALK!</h2>
            <a href="mailto:rehanurraihan@gmail.com" className="email-link">
              rehanurraihan@gmail.com
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="arrow-icon"
              >
                <path
                  d="M5.83333 14.1667L14.1667 5.83333M14.1667 5.83333H5.83333M14.1667 5.83333V14.1667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="copyright">
              <p>© Rehan Raihan - 2023</p>
            </div>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
