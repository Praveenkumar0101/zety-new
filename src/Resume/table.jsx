import React from 'react';
import './write-resume.css';

function Sidebar() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>Table of Contents</h2>
        <nav>
          <ul>
            <li className="active">Intro</li>
            <li>How to Create a Great Resume Fast</li>
            <li>How to Make a Resume: Example</li>
            <li>How to Write a Resume</li>
            <li>10+ Resume Examples for Various Jobs</li>
            <li>Key Takeaway</li>
            <li>About Zety’s Editorial Process</li>
            <li>Sources</li>
            <li>How to Write a Resume FAQ</li>
          </ul>
        </nav>
        <div className="scroll-top">
          <a href="#top">Scroll back to the top <i className="fas fa-arrow-up"></i></a>
        </div>
      </aside>
      <main className="content">
        <section className="guide-intro">
          <p>This comprehensive guide will show you all you need to know about making a resume that wows the recruiters.</p>
          <p>See some great resume writing tips, get inspired by helpful resume examples, and find answers to all your questions. I guarantee you’ll soon know how to build an excellent resume for any job you’re after!</p>
        </section>
        <section className="guide-details">
          <h2>In this guide, I’ll show you:</h2>
          <ul>
            <li>9-step instructions on how to make a resume for your desired job.</li>
            <li>10 complete resume examples for various jobs approved by career experts.</li>
            <li>An FAQ section to dispel doubts about how to write a resume that hits your career goals.</li>
          </ul>
        </section>
        <section className="guide-footer">
          <p>Want to save time and have your resume ready in 5 minutes? Try our resume builder. It’s fast and easy to use.<br /> Plus, you’ll get ready-made content to add with one click. <a href="#link">See 20+ resume templates and create your resume here.</a></p>
          <button className="r-button">Create Your Resume Now</button>
        </section>
      </main>

      <div className="app">
        <div className="resume-container">
          <div className="resume-template left-template">
            <img src="https://cdn-images.zety.com/pages/how_to_make_a_resume_zety_us_bad_example.jpg" alt="Bad Resume Example" />
            <div className="wrong-icon">✖</div>
          </div>
          <div className="resume-template right-template">
            <img src="https://cdn-images.zety.com/pages/how_to_make_a_resume_zety_us_good_example.jpg" alt="Good Resume Example" />
            <div className="correct-icon">✔</div>
            <button className="use-template-button">Use This Resume Template</button>
            <div className='zety'>
              <img src='https://s3-eu-west-1.amazonaws.com/tpd/logos/58a851be0000ff00059ce9cb/0x0.png' alt="Zety Logo"/>
            </div>
          </div>
        </div>
      </div>

      <header className="App-header">
        <div className="resume-section-custom">
          <div className="sample-resume-custom">
            <p>Sample resume made with our builder—<a href="#">See more resume examples here.</a></p>
          </div>

          <div className="testimonial-custom">
            <h2>One of our users, Erin, had this to say:</h2>
            <div className="testimonial-box-custom">
              <p>
                This is the greatest thing ever! My resume looks so professional. I didn't have to do anything but upload my written resume and Zety has automatically designed it and re-worded it.
              </p>
            </div>
          </div>

          <div className="analysis-custom">
            <p>
              After analyzing <strong>11 million resumes created with our builder</strong>, we’ve gathered valuable insights from a diverse range of users across different industries and experience levels. Here are our top findings to help you create a more effective resume:
            </p>

            <div className="data-insights-custom">
              <h3>Data-Backed Insights From Actual Resumes</h3>
              <ul>
                <li>57.84% of resumes created in our builder exceed 300 words, 28.23% range between 101 and 300 words, and 5.35% are under 100 words.</li>
                <li>3.59% of our users have no work experience, while 28.86% report having less than 3 years of work experience.</li>
                <li>The average number of skills listed on resumes is 12.56.</li>
                <li>The average number of jobs listed per resume is 2.61.</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Sidebar;
