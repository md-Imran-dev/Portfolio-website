import React from "react";
import "./BlogSection.css";
import StarIcon from "../assets/Star.png"; // Assuming you have the same star icon
import blogImg1 from "../assets/work_img.png"; // Add your blog images
import blogImg2 from "../assets/work_img2.png";
import blogImg3 from "../assets/work_img3.png";

const BlogSection = () => {
  const blogData = [
    {
      id: 1,
      title: "How UX works in web",
      date: "Nov 9, 2023",
      image: blogImg1,
      tags: ["UI", "UX"],
    },
    {
      id: 2,
      title: "Case study - Analysis Application.",
      date: "Aug 18, 2023",
      image: blogImg2,
      tags: ["DESIGN", "PRINT"],
    },
    {
      id: 3,
      title: "3 ways to develop your skill",
      date: "Feb 16, 2023",
      image: blogImg3,
      tags: ["FIGMA", "WEB"],
    },
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="blog-header">
          <div className="blog-title-container">
            <img src={StarIcon} alt="Star" className="star-icon" />
            <h2 className="blog-title">Blog</h2>
          </div>
          <a href="#" className="view-all-link">
            view all
          </a>
        </div>

        <div className="blog-list">
          {blogData.map((blog) => (
            <article key={blog.id} className="blog-item">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className="blog-content">
                <time className="blog-date">{blog.date}</time>
                <h3 className="blog-title-text">{blog.title}</h3>
                <div className="blog-tags">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button className="blog-read-btn">Read</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
