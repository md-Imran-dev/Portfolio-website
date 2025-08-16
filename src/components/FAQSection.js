import React, { useState } from "react";
import "./FAQSection.css";
import StarIcon from "../assets/Star.png"; // Assuming you have the same star icon

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default

  const faqData = [
    {
      id: 1,
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
    },
    {
      id: 2,
      question: "What tools and software do you use for UX design?",
      answer:
        "I use a variety of industry-standard tools including Figma for design and prototyping, Adobe Creative Suite for visual design, Sketch for interface design, InVision for prototyping and collaboration, Miro for user journey mapping, and various user testing platforms. The choice of tools depends on the specific project requirements and client preferences.",
    },
    {
      id: 3,
      question: "How do you measure the success of your UX designs?",
      answer:
        "I measure UX design success through multiple metrics including user engagement rates, task completion rates, user satisfaction scores, conversion rates, time on task, error rates, and user retention. I also conduct usability testing sessions, gather user feedback through surveys and interviews, and analyze user behavior through analytics tools to ensure the design meets both user needs and business objectives.",
    },
    {
      id: 4,
      question: "How long does a typical UX project take?",
      answer:
        "Project timelines vary significantly based on scope and complexity. A simple website redesign might take 4-6 weeks, while a comprehensive mobile app design could take 3-6 months. Factors affecting timeline include research requirements, number of screens/features, stakeholder feedback cycles, and testing phases. I always provide detailed project timelines during the initial consultation.",
    },
    {
      id: 5,
      question: "Do you work with development teams?",
      answer:
        "Yes, I work closely with development teams throughout the design process. I provide detailed design specifications, style guides, and interactive prototypes to ensure smooth handoff. I'm experienced in collaborating with developers, attending sprint meetings, and making design adjustments based on technical constraints while maintaining the user experience integrity.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header">
          <div className="faq-title-container">
            <img src={StarIcon} alt="Star" className="star-icon" />
            <h2 className="faq-title">Frequently asked questions</h2>
          </div>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq-item ${openFAQ === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="question-text">{faq.question}</h3>
              </button>

              <div
                id={`faq-answer-${faq.id}`}
                className={`faq-answer ${openFAQ === index ? "open" : ""}`}
              >
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
