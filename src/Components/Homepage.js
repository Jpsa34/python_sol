import React from "react";
import slide_1 from "./img/slideshow/1.jpg";
import pylogo from "./img/pylogo.png";
import car from "./img/car.jpg";
import curtain from "./img/curtain.jpg";
import data from "./img/data.jpg";
import laptop from "./img/laptop.png";
import twitter from "./img/icons/twitter.svg";
import fb from "./img/icons/facebook.svg";
import insta from "./img/icons/instagram.svg";
import li from "./img/icons/linkedin.svg";
import customstyle from "./styles/customstyle.module.css";

export const Homepage = () => {
  return (
    <div className="App">
      {/* SLIDESHOW */}
      <div classnName={customstyle.pypicsdiv}>
        <div className={customstyle.pypicsdiv2}>
          <div>
            <h1>ENTERPRISE SOFTWARE DEVELOPMENT</h1>
            <p>
              We design and develop web and mobile applications for our clients
              worldwide. focusing on outstanding user experience
            </p>
            <a>Read More</a>
          </div>
        </div>
        <img className={customstyle.pypics} src={slide_1}></img>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <div className="App">
      <div className={customstyle.servicediv}>
        <h1 className={customstyle.h1servicediv}>WHO WE OFFER</h1>
        <div className={customstyle.pservicediv}>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim
          </p>
        </div>
        <div className={customstyle.aservices}>
          <a>SERVICES</a>
          <a>TECHNOLOGIES</a>
          <a>INDUSTRIES</a>
        </div>
        <div className={customstyle.aservicescontainer}>
          <div className={customstyle.aservicesoffered}>
            <div className={customstyle.aicons}>
              <img className={customstyle.aimg} src={pylogo}></img>
            </div>
            <div className={customstyle.ah2}>
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
              <a>View More</a>
            </div>
          </div>

          <div className={customstyle.aservicesoffered}>
            <div className={customstyle.aicons}>
              <img className={customstyle.aimg} src={pylogo}></img>
            </div>
            <div className={customstyle.ah2}>
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
              <a>View More</a>
            </div>
          </div>

          <div className={customstyle.aservicesoffered}>
            <div className={customstyle.aicons}>
              <img className={customstyle.aimg} src={pylogo}></img>
            </div>
            <div className={customstyle.ah2}>
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
              <a>View More • </a>
            </div>
          </div>
        </div>
        <div className={customstyle.aservicescontainer}>
          <div className={customstyle.aservicesoffered}>
            <div className={customstyle.aicons}>
              <img className={customstyle.aimg} src={pylogo}></img>
            </div>
            <div className={customstyle.ah2}>
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
              <a>View More</a>
            </div>
          </div>

          <div className={customstyle.aservicesoffered}>
            <div className={customstyle.aicons}>
              <img className={customstyle.aimg} src={pylogo}></img>
            </div>
            <div className={customstyle.ah2}>
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
              <a>View More</a>
            </div>
          </div>

          <div className={customstyle.aservicesoffered}>
            <div className={customstyle.aicons}>
              <img className={customstyle.aimg} src={pylogo}></img>
            </div>
            <div className={customstyle.ah2}>
              <h2>hello world</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
              <a>View More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Solutions = () => {
  return (
    <div className="App">
      <div className={customstyle.solutionsdiv}>
        <h1>Solutions We Deliver</h1>
        <p>
          We It-enable all kinds of B2B,B2C interactions and internal
          operations.
        </p>
        <div className={customstyle.solutionscontainer}>
          <a>Enterprise applications</a>
          <a>CRM</a>
          <a>eCommerce</a>
          <a>Mobile Apps</a>
        </div>
        <div className={customstyle.solutionscontainer}>
          <a>Collaboration and Productivity Solutions</a>
          <a>Data Analysis</a>
          <a>Web Portals</a>
          <a>ITSM</a>
        </div>
      </div>
    </div>
  );
};

export const Otherservices = () => {
  return (
    <div className="App">
      <div className={customstyle.otherservicescontainer}>
        <div className={customstyle.otherservicesmaindiv}>
          <div className={customstyle.otherservicesdiv}>
            <h3>EVERY ASPECT OF YOUR IT ECOSYSTEM. TAKEN CARE OF.</h3>
            <p>
              Comprehensive care of your cloud or on-premises infrastructure and
              applications with:
            </p>
            <div>
              <ul>
                <li> Consulting </li>
                <li> Implementation </li>
                <li> Management and support </li>
              </ul>
            </div>
            <div>
              <ul>
                <li> Services </li>
                <li> Help desk services </li>
                <li> Migration </li>
              </ul>
            </div>
          </div>
          <div className={customstyle.otherservicesdiv2}>
            <img src={laptop} className={customstyle.otherserviceslaptop}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Featured = () => {
  return (
    <div className="App">
      <h3 className={customstyle.featuredinsighth3}>FEATURED INSIGHTS</h3>
      <div className={customstyle.featuredinsightcontainer}>
        <div className={customstyle.featuredinsightdiv}>
          <img src={car} className={customstyle.featuredinsightpic1}></img>
          <h5 className={customstyle.pd2}>Blockchain</h5>
          <h2 className={customstyle.pd2}>
            Buying Tesla with Bitcoin: The Never Ending Potential of Blockchain
            Technology
          </h2>
          <p className={customstyle.pd2}>
            Lorem ipsum Comprehensive care of your cloud or on-premises
            infrastructure and applications with
          </p>
        </div>
        <div className={customstyle.featuredinsightdiv2}>
          <div className={customstyle.featuredinsightdiv3}>
            <img src={data} className={customstyle.featuredinsightpic2}></img>
            <div>
              <h5 className={customstyle.pd2}>Blockchain</h5>
              <h2 className={customstyle.pd2}>
                Buying Tesla with Bitcoin: The Never Ending Potential of
                Blockchain Technology
              </h2>
              <p className={customstyle.pd2}>
                Lorem ipsum Comprehensive care of your cloud or on-premises
                infrastructure and applications with
              </p>
            </div>
          </div>
          <div className={customstyle.featuredinsightdiv4}>
            <img
              src={curtain}
              className={customstyle.featuredinsightpic2}
            ></img>
            <div>
              <h5 className={customstyle.pd2}>Blockchain</h5>
              <h2 className={customstyle.pd2}>
                Buying Tesla with Bitcoin: The Never Ending Potential of
                Blockchain Technology
              </h2>
              <p className={customstyle.pd2}>
                Lorem ipsum Comprehensive care of your cloud or on-premises
                infrastructure and applications with
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="App">
      <footer>
        <div className={customstyle.footercontainer}>
          <div className={customstyle.footerdiv1}>
            <div className={customstyle.footerdiv1_1}>
              <img className={customstyle.footerlogo} src={pylogo}></img>
            </div>
            <div className={customstyle.footerdiv1_2}>
              <p>
                20/F, Zueling Building Makati Ave. Corner Paseo de Roxas Makati
                City, Philippines
              </p>
            </div>
            <div className={customstyle.footerdiv1_3}>
              <p>+63 123456789 | +63 12458795321</p>
            </div>
            <div className={customstyle.footerdiv1_4}>
              <p>info@python.ph</p>
            </div>
          </div>
          <div className={customstyle.footerdiv2}>
            <div className={customstyle.footerdiv2_1}>
              <div className={customstyle.footerdiv2_1_1}>
                <a>About</a>
                <a>Join Our Team</a>
                <a>Privacy Policy</a>
                <a>Terms of Use</a>
              </div>
              <div className={customstyle.footerdiv2_1_2}>
                <p>© 2021 Python Solutions. All rights reserved</p>
              </div>
            </div>
            <div className={customstyle.footerdiv2_2}>
              <div className={customstyle.footerdiv2_2_1}>
                <a href="#">
                  <img src={li}></img>
                </a>
                <a href="#">
                  <img src={insta}></img>
                </a>
                <a href="#">
                  <img src={twitter}></img>
                </a>
                <a href="#">
                  <img src={fb}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
