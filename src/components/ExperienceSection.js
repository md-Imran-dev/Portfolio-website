import React from "react";
import StarIcon from "../assets/Star.png";
import "./ExpertiseSection.css";

const ExperienceSection = () => {
  const experienceData = [
    {
      id: 1,
      position: "Lead Product Designer",
      company: "Fortknox",
      duration: "Mar 2022 - Oct 2023",
    },
    {
      id: 2,
      position: "Intern Designer",
      company: "OmniSafe",
      duration: "Mar 2022 - Oct 2023",
    },
    {
      id: 3,
      position: "UI Designer",
      company: "Doradesign",
      duration: "Mar 2022 - Oct 2023",
    },
    {
      id: 4,
      position: "Frontend Developer",
      company: "OpacityAuthor",
      duration: "Mar 2022 - Oct 2023",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="experience-header">
          <div className="experience-title-container">
            <img src={StarIcon} alt="Star" className="star-icon" />
            <h2 className="experience-title">Experience</h2>
          </div>
        </div>

        <div className="experience-list">
          {experienceData.map((experience) => (
            <div key={experience.id} className="experience-item">
              <div className="experience-content">
                <h3 className="experience-position">{experience.position}</h3>
                <div className="experience-details">
                  <span className="experience-company">
                    {experience.company}
                  </span>
                  <span className="experience-duration">
                    {experience.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
