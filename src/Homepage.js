import "./Homepage.css";
import { NavLink } from "react-router-dom";
import LogoImage from "./Images/Home/logo-white.png";
import AboutImage from "./Images/About/About-image.png";
import h1magichtml from "./Images/Home/html.png";
import h1magiccss from "./Images/Home/css.png";
import h1magicjs from "./Images/Home/js.png";
import caseImg1 from "./Images/Case/case-1.png";
import caseImg2 from "./Images/Case/case-2.png";
import caseImg3 from "./Images/Case/case-3.png";

import NavBar from "./Components/NavBar.js";
import cookieImage from "./Images/Home/Cookiess.png";
function Homepage() {
  return (
    <>
      <section className="homepage-h1">
        <div className="cookies-popup">
          <img height="20" width="20" src={cookieImage} alt="cookieImage" />
          <span>
            {" "}
            This website uses{" "}
            <NavLink to="/Cookies">
              <span className="strike cook-txt"> Cookies</span>
            </NavLink>{" "}
            - <span className="strike dismiss">Dismiss</span>
          </span>
        </div>
        <NavBar />
        <div className="h1-container">
          <div className="h1-headings">
            <h3>Hello, I'm &nbsp; </h3>
            <h1> Piyush </h1>
            <br />
            <h3> Yess... a front-end developer.</h3>
            <br />
            <h3 className="cursive">I do magic with these...</h3>
          </div>
          <div className="h1-social">
            <ul className="h1-social-ul">
              <li>
                {" "}
                <a>
                  <i class="i-4 fa-brands fa-twitter fa-2xs"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="i-1 fa-brands fa-facebook-f fa-2xs"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="i-2 fa-brands fa-whatsapp fa-2xs"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="i-3 fa-brands fa-instagram fa-2xs"></i>
                </a>
              </li>
              {/* <li>
                <a>
                  <i class=" fa-brands fa-youtube fa-2xs"></i>
                </a>
              </li> */}
              <li>
                <a>
                  <i class="i-5 fa-brands fa-linkedin-in fa-2xs"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h1-magic-boxes">
          <div className="h1-magics">
            <img src={h1magichtml} alt="htmlAlternate" />
          </div>
          <div className="h1-magics">
            <img src={h1magiccss} alt="cssAlternate" />
          </div>
          <div className="h1-magics">
            <img src={h1magicjs} alt="jsAlternate" />
          </div>
        </div>
      </section>

      <section className="about-a1">
        <div className="a1-content">
          <h1>My Journey</h1>
          <p>
            My name is Piyush Bijwey, an intern front-end develeper. I've
            started my web development journey when i was in college. Earlier I
            had decided to just be a creative front end developer but from
            twenty twenty one, I've dived more into web and thaught to give a
            try to back end also.
          </p>
        </div>
        <div className="a1-image">
          <img src={AboutImage} alt="AboutImageAlternate" />
        </div>
      </section>
      {/* 
      <section>skills</section>
      <section>resume</section> */}
      <section id="cases-id" className="latest-l1">
        <h1 className="l1-heading">Case Studies</h1>
        <div className="l1-container">
          <div className="l1-cases l1-left">
            <img src={caseImg1} alt="altCase" />
            <div className="l1-overlay"></div>
            <div className="l1-overlay-headings">
              <div>
                <h1>E-parent Website</h1>
                <h3>A servie porvider company.</h3>
                <button className="l1-btn">
                  <NavLink exact to="/Eparent" className="l1-nav">
                    Case Study <i class="l1-i fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="l1-cases l1-right">
            <img src={caseImg2} alt="altCase" />
            <div className="l1-overlay"></div>
            <div className="l1-overlay-headings">
              <h1>Ivaan Studios</h1>
              <h3>A studio with creative developers.</h3>
              <button className="l1-btn">
                <NavLink exact to="/Ivaan1" className="l1-nav">
                  Case Study <i class="l1-i fa-solid fa-arrow-right-long"></i>
                </NavLink>
              </button>
            </div>
          </div>

          <div className="l1-cases l1-left">
            <img src={caseImg3} alt="altCase" />
            <div className="l1-overlay"></div>
            <div className="l1-overlay-headings">
              <h1>Ivaan Studios II</h1>
              <h3>Recreated, with new implementations and design</h3>
              <button className="l1-btn">
                <NavLink exact to="/Ivaan2" className="l1-nav">
                  Case Study <i class="l1-i fa-solid fa-arrow-right-long"></i>
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="code-c1">
        <h1 className="c1-heading">Look at some of my experiments:</h1>
        <div className="c1-pens-container">
          <div className="c1-pens">
            <a href="" target="_blank">
              <div className="c1-circle-container">
              <div className="c1-circle">
                <video src=""></video>
              </div>
              </div>
              <div className="c1-bottom">
                <h1 className="c1-title">Title</h1>
                <h3 className="c1-discription">This is something written.</h3>
                <div className="c1-No,Bar">
                  <span className="c1-bar"></span>
                </div>
              </div>
            </a>
          </div>
          <div className="c1-pens"><a href="" target="_blank">
              <div className="c1-circle-container">
              <div className="c1-circle">
                <video src=""></video>
              </div>
              </div>
              <div className="c1-bottom">
                <h1 className="c1-title">Title</h1>
                <h3 className="c1-discription">This is something written.</h3>
                <div className="c1-No,Bar">
                  <span className="c1-bar"></span>
                </div>
              </div>
            </a></div>
          <div className="c1-pens"><a href="" target="_blank">
              <div className="c1-circle-container">
              <div className="c1-circle">
                <video src=""></video>
              </div>
              </div>
              <div className="c1-bottom">
                <h1 className="c1-title">Title</h1>
                <h3 className="c1-discription">This is something written.</h3>
                <div className="c1-No,Bar">
                  <span className="c1-bar"></span>
                </div>
              </div>
            </a></div>
          <div className="c1-pens"><a href="" target="_blank">
              <div className="c1-circle-container">
              <div className="c1-circle">
                <video src=""></video>
              </div>
              </div>
              <div className="c1-bottom">
                <h1 className="c1-title">Title</h1>
                <h3 className="c1-discription">This is something written.</h3>
                <div className="c1-No,Bar">
                  <span className="c1-bar"></span>
                </div>
              </div>
            </a></div>
        </div>
      </section>

      <section className="footer-f1">
        <img
          className="f1-img"
          src={LogoImage}
          height="150"
          width="100"
          alt="logoAlternateText"
        />
        <span className="f1-top">Top</span>
        <div className="f1-socials">
          <ul className="f1-social-ul">
            <li>
              <a href="https://twitter.com/PiyushBijwey" target="_blank">
                <span className="strike">twitter</span>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <span className="strike">facebook</span>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <span className="strike">whatsapp</span>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <span className="strike">instagram</span>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <span className="strike">linkedin</span>
              </a>
            </li>
          </ul>
        </div>
        <span className="f1-copyright">@copyright-PiyushPortfolio.com</span>
      </section>
    </>
  );
}

export default Homepage;
