import React from "react";
import customstyle from "./styles/customstyle.module.css";
import pylogo from "./img/pylogo.png";

export const PyFooter = () => {
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
            <div className={customstyle.footerdiv2_2}></div>
          </div>
        </div>
      </footer>
    </div>
  );
};
