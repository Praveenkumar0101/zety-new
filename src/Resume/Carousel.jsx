import React, { useState, useEffect } from "react";
import "./Carousel.css"; 

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Caroline Dowd-Higgins",
      title: "TEDx Speaker & Executive Coach",
      text: "The worker’s market has created fierce competition for roles. Your resume is the first impression and an essential opportunity to distinguish yourself. I have reviewed thousands of resumes in my coaching practice and the Zety Resume builder and templates are an outstanding resource to help you put your best professional foot forward. User friendly with recruiter insight to help you shine.",
      image: "https://cdn-images.zety.com/images/zety/avatar/caroline_Dowd_Higgins_TEDx_Speaker.jpg", // Replace with the correct image path
      linkedinIcon: "https://static.vecteezy.com/system/resources/previews/017/395/557/original/linkedin-social-media-icon-symbol-logo-free-vector.jpg", // Correct LinkedIn icon path
      linkedin: "https://www.linkedin.com/in/caroline-dowd-higgins", // Correct LinkedIn profile URL
    },
    {
      name: "Margaret Buj",
      title: "Interview Coach & Career Blogger",
      text: "What I like about Zety resumes is their user-friendly interface and customization options. You can choose from 18 sleek templates and easily modify the design, layout, colors, and fonts to create a unique and professional-looking resume. Additionally, Zety offers pre-written content tailored to different job positions, saving users valuable time compared to crafting their resumes from scratch.",
      image: "https://cdn-images.zety.com/images/zety/avatar/margaret_Buj_Career_Blogger.jpg", // Replace with the correct image path
      linkedinIcon: "https://static.vecteezy.com/system/resources/previews/017/395/557/original/linkedin-social-media-icon-symbol-logo-free-vector.jpg", // Correct LinkedIn icon path
      linkedin: "https://www.linkedin.com/in/margaretbuj", // Correct LinkedIn profile URL
    },
    {
      name: "Yuri Kruman",
      title: "HR Transformation & Leadership Coach",
      text: "The templates look great and the fact that they're optimized for ATS is super helpful. When I used the resume builder tool I was absolutely blown away. I've used TealHQ, a really powerful (paid) tool. But Zety goes further by suggesting not just keywords to use, but entire phrases. Truly impressive! You've really taught me something and given me an incredible way to serve my clients.",
      image: "https://cdn-images.zety.com/images/zety/avatar/yuri_Kurman_Leadership_Coach.jpg", // Replace with the correct image path
      linkedinIcon: "https://static.vecteezy.com/system/resources/previews/017/395/557/original/linkedin-social-media-icon-symbol-logo-free-vector.jpg", // Correct LinkedIn icon path
      linkedin: "https://www.linkedin.com/in/margaretbuj", // Correct LinkedIn profile URL
    },
     
    {
      name: "Toni Frana",
      title: "Career Expert",
      text: "Job seekers have a lot to contend with when looking for a job, and Zety resources make things much easier! The straightforward process of creating a new, streamlined resume removes one of the pain points for job seekers. Zety produces a resume that does a great job highlighting the accomplishments and making a candidate stand out to employers.",
      image: "https://cdn-images.zety.com/images/zety/avatar/toni_frana.webp", // Replace with the correct image path
      linkedinIcon: "https://static.vecteezy.com/system/resources/previews/017/395/557/original/linkedin-social-media-icon-symbol-logo-free-vector.jpg", // Correct LinkedIn icon path
      linkedin: "https://www.linkedin.com/in/margaretbuj", // Correct LinkedIn profile URL
    },
    
    {
      name: "Christine Zapata",
      title: "CEO, Human Insights Consulting",
      text: "What makes Zety unique? The ability to enhance your resume using pre- written content that is optimized for ATS screeners. With just a simple click, you can seamlessly incorporate these pre-written descriptions into your resume to effectively catch recruiters' attention. Additionally, Zety's builder identifies the skills and experience recruiters are actively seeking, allowing you to ensure your relevant expertise is properly emphasized",
      image: "https://cdn-images.zety.com/images/zety/avatar/c_zapata_headshot.webp", // Replace with the correct image path
      linkedinIcon: "https://static.vecteezy.com/system/resources/previews/017/395/557/original/linkedin-social-media-icon-symbol-logo-free-vector.jpg", // Correct LinkedIn icon path
      linkedin: "https://www.linkedin.com/in/margaretbuj", // Correct LinkedIn profile URL
    },

   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
          >
            <div className="testimonial-content">
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} className="profile-photo" />
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.title}</h4>
                </div>
                <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                  <img src={testimonial.linkedinIcon} alt="LinkedIn" />
                </a>
              </div>
              <div className="testimonial-text">
                <p>{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-control right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
