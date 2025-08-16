import React, { useState } from "react";
import "./TestimonialsSection.css";
import StarIcon from "../assets/Star.png"; // Assuming you have the same star icon
import userAvatar1 from "../assets/Testimonial.png";
import userAvatar2 from "../assets/Testimonial.png";
import userAvatar3 from "../assets/Testimonial.png";
import ArrowLeft from "../assets/Arrow_left.png";
import ArrowRight from "../assets/Arrow_right.png";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [lastClickedButton, setLastClickedButton] = useState(null);

  const testimonialsData = [
    {
      id: 1,
      name: "Floyd Miles",
      company: "eBay",
      avatar: userAvatar1,
      testimonial:
        "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    },
    {
      id: 2,
      name: "Jane Cooper",
      company: "Microsoft",
      avatar: userAvatar2,
      testimonial:
        "Amazing experience working with this team. The attention to detail and professional approach exceeded my expectations. Highly recommend their services for anyone looking to elevate their career.",
    },
    {
      id: 3,
      name: "Robert Fox",
      company: "Google",
      avatar: userAvatar3,
      testimonial:
        "Outstanding design work and excellent communication throughout the project. The final result was exactly what I envisioned and helped me land my dream job. Couldn't be happier with the outcome.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
    setLastClickedButton("next");
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
    setLastClickedButton("prev");
  };

  const currentData = testimonialsData[currentTestimonial];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="testimonials-title-container">
            <img src={StarIcon} alt="Star" className="star-icon" />
            <h2 className="testimonials-title">What they say</h2>
          </div>
        </div>

        <div className="testimonials-content">
          <div className="testimonial-user">
            <div className="user-avatar">
              <img src={currentData.avatar} alt={currentData.name} />
            </div>
            <div className="user-info">
              <h3 className="user-name">{currentData.name}</h3>
              <p className="user-company">{currentData.company}</p>
            </div>
          </div>

          <div className="testimonial-text">
            <div className="quote-icon">"</div>
            <p className="testimonial-quote">{currentData.testimonial}</p>
          </div>

          <div className="testimonial-navigation">
            <button
              className={`nav-btn prev-btn ${
                lastClickedButton === "prev" ? "active" : ""
              }`}
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <img src={ArrowLeft} alt="Previous" className="arrow-icon" />
            </button>
            <button
              className={`nav-btn next-btn ${
                lastClickedButton === "next" ? "active" : ""
              }`}
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <img src={ArrowRight} alt="Next" className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
