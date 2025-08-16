import React from "react";
import "./WorksSection.css";
import StarIcon from "../assets/Star.png";
import workImg1 from "../assets/work_img.png";
import workImg2 from "../assets/work_img2.png";
import workImg3 from "../assets/work_img3.png";

const WorksSection = () => {
  const worksData = [
    {
      id: 1,
      title: "Analysis Application",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      image: workImg1,
      tags: ["FIGMA", "UX"],
      backgroundColor: "#8B7355",
    },
    {
      id: 2,
      title: "Fortknox Application",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      image: workImg2,
      tags: ["MOBILE", "WEB"],
      backgroundColor: "#2C5F41",
    },
    {
      id: 3,
      title: "Genocide Application",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      image: workImg3,
      tags: ["APP", "WEB"],
      backgroundColor: "#8B7355",
    },
  ];

  return (
    <section className="works-section" id="projects">
      <div className="container">
        <div className="works-header">
          <div className="works-title-container">
            <img src={StarIcon} alt="Star" className="star-icon" />
            <h2 className="works-title">Works</h2>
          </div>
          <a href="#" className="view-all-link">
            view all
          </a>
        </div>

        <div className="works-grid">
          {worksData.map((work) => (
            <div
              key={work.id}
              className="work-card"
              style={{ backgroundColor: work.backgroundColor }}
            >
              <div className="work-image">
                <img src={work.image} alt={work.title} />
              </div>
              <div className="work-content">
                <div className="work-tags-container">
                  <h3 className="work-title">{work.title}</h3>

                  <p className="work-description">{work.description}</p>
                  <div className="work-tags">
                    {work.tags.map((tag, index) => (
                      <span key={index} className="work-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="view-case-study-btn">View Case Study</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
