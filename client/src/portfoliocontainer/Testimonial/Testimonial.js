import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import lady from "../../../src/img/Testimonial/lady.png";
import lady2 from "../../../src/img/Testimonial/lady2.png";
import mike from "../../../src/img/Testimonial/mike.png";
import man from "../../../src/img/Testimonial/man.png";
import shape from "../../../src/img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"I work hard in every area"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Ta akooo, taky študent u nas iščo nebul jak toten Marcianko
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>PhDr. Katarína Mayerová PhD.</h5>
                    <p>Vedúca katedry filozofie UPJŠ</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Ta akooo, taky študent u nas iščo nebul jak toten Marcianko
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={mike} alt="no internet connection"></img>
                    <h5>doc. PhDr. Štefan Jusko, PhD.</h5>
                    <p>Katedra filozofie UPJŠ</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Ta akooo, taky študent u nas iščo nebul jak toten Marcianko
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={lady2} alt="no internet connection"></img>
                    <h5>Beatrix Susanne Lepis, PhD</h5>
                    <p>Katedra filozofie UPJŠ</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Ta akooo, taky študent u nas iščo nebul jak toten Marcianko
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={man} alt="no internet connection"></img>
                    <h5>Mgr. Dominik Kulcsár</h5>
                    <p>Katedra filozofie UPJŠ</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}