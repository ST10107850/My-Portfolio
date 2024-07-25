import "../assets/css/bootstrap.min.css";
import "../assets/css/slick.css";
// import "../assets/css/lightgallery.min.css";
import "../assets/css/animate.css";
import "../assets/css/style.css";

import background from "../assets/img/home.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  return (
    <section
      className="st-hero st-style2 st-bg st-dynamic-bg"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="st-hero-text">
          <h1>
            Hi, I am <span>Samuel Nsundwane</span>
          </h1>
          <p>
            I am a Software Developer specializing in creating clean, efficient
            code and pixel-perfect designs. <br />
            My expertise extends to enhancing user experiences through engaging
            web animations, <br />
            making websites not only functional but also interactive and
            visually compelling
          </p>
          <div className="st-hero-social-links">
            <a
              href="https://www.facebook.com/nhlakanipho.jiyan"
              className="st-social-btn"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://wa.link/ko1syj" className="st-social-btn">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://github.com/ST10107850" className="st-social-btn">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nhlakanipho-nsundwane-9bb368249/"
              className="st-social-btn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <svg
        x="0px"
        y="0px"
        viewBox="0 186.5 1920 113.5"
        className="st-hero-shape"
      >
        <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
      </svg>
    </section>
  );
}

export default Home;
