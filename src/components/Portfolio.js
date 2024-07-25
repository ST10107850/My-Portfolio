import "../assets/css/bootstrap.min.css";
import "../assets/css/slick.css";
import "../assets/css/animate.css";
import "../assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
//Import Images
import Portfolio1 from "../assets/img/portfolio/survey.webp";
import Portfolio2 from "../assets/img/portfolio/th.jpeg";
import Portfolio3 from "../assets/img/portfolio/dronoticz.webp";
import Portfolio4 from "../assets/img/portfolio/portfolio4.jpg";
import Portfolio5 from "../assets/img/portfolio/portfolio5.jpg";
import Portfolio6 from "../assets/img/portfolio/portfolio6.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <div class="st-height-b100 st-height-lg-b80"></div>
      <div class="container">
        <div class="st-section-heading st-style1">
          <h4 class="st-section-heading-title">PORTFOLIOS</h4>
          <h2 class="st-section-heading-subtitle">PORTFOLIOS</h2>
        </div>
        <div class="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="st-portfolio-single st-style1 st-lightgallery">
              <div class="st-portfolio-item">
                <a
                  href="https://github.com/ST10107850/Assignment.git"
                  class="st-portfolio st-zoom st-lightbox-item"
                >
                  <div class="st-portfolio-img st-zoom-in">
                    <img src={Portfolio1} alt="portfolio" />
                  </div>
                  <div class="st-portfolio-item-hover">
                    <i class="fas fa-plus-circle"></i>
                    <h5>Survey Form Application</h5>
                    <p>Design / Marketing</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="st-portfolio-single st-style1 st-lightgallery">
              <div class="st-portfolio-item">
                <a
                  href="https://github.com/ST10107850/Work-Integrated.git"
                  class="st-portfolio st-zoom st-lightbox-item"
                >
                  <div class="st-portfolio-img st-zoom-in">
                    <img src={Portfolio2} alt="portfolio" />
                  </div>
                  <div class="st-portfolio-item-hover">
                    <i class="fas fa-plus-circle"></i>
                    <h5>StarBucks Application</h5>
                    <p>App Design/ Work Intergrated</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="st-portfolio-single st-style1 st-lightgallery">
              <div class="st-portfolio-item">
                <a
                  href="https://dronoticz.vercel.app/"
                  class="st-portfolio st-zoom st-lightbox-item"
                >
                  <div class="st-portfolio-img st-zoom-in">
                    <img src={Portfolio3} alt="portfolio" />
                  </div>
                  <div class="st-portfolio-item-hover">
                    <i class="fas fa-plus-circle"></i>
                    <h5>Dronoticz Website</h5>
                    <p>Web Application</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="st-portfolio-single st-style1 st-lightgallery">
              <div class="st-portfolio-item">
                <a
                  href={Portfolio4}
                  class="st-portfolio st-zoom st-lightbox-item"
                >
                  <div class="st-portfolio-img st-zoom-in">
                    <img src={Portfolio4} alt="portfolio" />
                  </div>
                  <div class="st-portfolio-item-hover">
                    <i class="fas fa-plus-circle"></i>
                    <h5>Product Design</h5>
                    <p>Design / Marketing</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="st-portfolio-single st-style1 st-lightgallery">
              <div class="st-portfolio-item">
                <a
                  href={Portfolio5}
                  class="st-portfolio st-zoom st-lightbox-item"
                >
                  <div class="st-portfolio-img st-zoom-in">
                    <img src={Portfolio5} alt="portfolio" />
                  </div>
                  <div class="st-portfolio-item-hover">
                    <i class="fas fa-plus-circle"></i>
                    <h5>Product Design</h5>
                    <p>Design / Marketing</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="st-portfolio-single st-style1 st-lightgallery">
              <div class="st-portfolio-item">
                <a
                  href={Portfolio6}
                  class="st-portfolio st-zoom st-lightbox-item"
                >
                  <div class="st-portfolio-img st-zoom-in">
                    <img src={Portfolio6} alt="portfolio" />
                  </div>
                  <div class="st-portfolio-item-hover">
                    <i class="fas fa-plus-circle"></i>
                    <h5>Product Design</h5>
                    <p>Design / Marketing</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-12 text-center">
            <div class="st-portfolio-btn">
              {/* <a href="#" class="st-btn st-style1 st-color1">
                Load More
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div class="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
}
export default Portfolio;
