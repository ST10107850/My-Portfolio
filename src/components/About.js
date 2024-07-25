import "../assets/css/bootstrap.min.css";
import "../assets/css/slick.css";
// import "../assets/css/lightgallery.min.css";
import "../assets/css/animate.css";
import "../assets/css/style.css";
import about from "../assets/img/section/about.jpeg";

import "@fortawesome/fontawesome-free/css/all.min.css";

function About() {
  return (
    <div className="st-about-wrap">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">
            ABOUT <spna className="backdrop">ME</spna>
          </h4>
          <h2 className="st-section-heading-subtitle">ABOUT ME</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div className="container">
        <div className="row st-about-content">
          <div className="col-lg-6">
            <div className="st-about-img-wrap">
              <div
                className="st-about-img"
                style={{ backgroundImage: `url(${about})` }}
              ></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div className="st-text-block st-style1">
                  <h2 className="st-text-block-title">
                    Hi There! I'm Nhlakanipho Samuel Nsundwane
                  </h2>
                  <h4 className="st-text-block-subtitle">Software Developer</h4>
                  <div className="st-text-block-text">
                    <p>
                      I have a strong background in Java, C#, Web and Android
                      development, data analysis, and a strong interest in data
                      science and back-end development. Competent with software
                      tools acquired through academic projects, selfdirected
                      learning, and programming languages. Eager to use my
                      expertise and pick up teamwork skills in a work
                      environment. a quick learner with a strong aptitude for
                      solving problems and an enthusiasm for IT. Looking for an
                      entry-level job to launch a lucrative software development
                      career
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
