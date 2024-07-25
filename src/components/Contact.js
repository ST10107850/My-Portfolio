import "../assets/css/bootstrap.min.css";
import "../assets/css/slick.css";
// import "../assets/css/lightgallery.min.css";
import "../assets/css/animate.css";
import "../assets/css/style.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  return (
    <section id="contact" class="st-dark-bg">
      <div class="st-height-b100 st-height-lg-b80"></div>
      <div class="container">
        <div class="st-section-heading st-style1">
          <h4 class="st-section-heading-title">CONTACT ME</h4>
          <h2 class="st-section-heading-subtitle">CONTACT ME</h2>
        </div>
        <div class="st-height-b25 st-height-lg-b25"></div>
      </div>

      {/* <!-- Contact Container --> */}

      <div class="container">
        <div class="row">
          <div class="st-height-b0 st-height-lg-b30"></div>

          <div class="contact">
            <div class="st-height-b0 st-height-lg-b40"></div>
            <h3 class="st-contact-title">Contact Info</h3>
            <div class="st-contact-text">
              Get in touch through my contact information provided here.
            </div>
            <div class="st-contact-info-wrap">
              <div class="st-single-contact-info">
                <i class="fas fa-envelope"></i>
                <div class="st-single-info-details">
                  <h4>Email</h4>
                  <a href="#">samuelnhlakanipho08@gmail.com</a>
                  <a href="#">ST10107850@rcconnect.edu.za</a>
                </div>
              </div>
              <div class="st-single-contact-info">
                <i class="fas fa-phone-alt"></i>
                <div class="st-single-info-details">
                  <h4>Phone</h4>
                  <span>+27 79 945 3446</span>
                  <span>+27 72 877 4723</span>
                </div>
              </div>
              <div class="st-single-contact-info">
                <i class="fas fa-map-marker-alt"></i>
                <div class="st-single-info-details">
                  <h4>Address</h4>
                  <span>
                    24 Barnato Street, Berea, <br />
                    Johannesburg, 2198
                  </span>
                </div>
              </div>
              <div class="st-social-info">
                <div class="st-social-text">
                  Visite my social profile and get connected
                </div>
                <div class="st-social-link">
                  <a href="https://wa.link/ko1syj" class="st-social-btn active">
                    <span class="st-social-icon">
                      <i class="fab fa-whatsapp"></i>
                    </span>
                    <span class="st-icon-name">WhatsApp</span>
                  </a>
                  <a
                    href="https://www.facebook.com/nhlakanipho.jiyan"
                    class="st-social-btn"
                  >
                    <span class="st-social-icon">
                      <i class="fab fa-facebook"></i>
                    </span>
                    <span class="st-icon-name">Facebook</span>
                  </a>
                  <a href="https://github.com/ST10107850" class="st-social-btn">
                    <span class="st-social-icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span class="st-icon-name">Github</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nhlakanipho-nsundwane-9bb368249/"
                    class="st-social-btn"
                  >
                    <span class="st-social-icon">
                      <i class="fab fa-linkedin"></i>
                    </span>
                    <span class="st-icon-name">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
}
export default Contact;
