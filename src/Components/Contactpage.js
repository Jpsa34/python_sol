import customstyle from "./styles/customstyle.module.css";
import twitter from "./img/icons/twitter.svg";
import fb from "./img/icons/facebook.svg";
import insta from "./img/icons/instagram.svg";
import li from "./img/icons/linkedin.svg";
import React, { Component } from "react";

export const Contactpage = () => {
  return (
    <div className="App">
      <div className={customstyle.contactcontainer}>
        <div className={customstyle.contactdiv}>
          <h4>Say Hello</h4>
          <h1>Contact Us</h1>
        </div>
        <div className={customstyle.contactdiv1}>
          <div className={customstyle.contactdiv2}>
            <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
            <div className={customstyle.contactdiv2info}>
              <h4>HEADQUARTERS</h4>
              <p>
                20/F, ZUELING BUILDING MAKATI AVE. CORNER PASEO de Roxas MAKATI
                CITY, PHILIPPINES
              </p>
              <p>+63 123456789 | +63 123456789</p>
              <p> info@pythonph.com</p>
            </div>
            <div className={customstyle.contactdiv2social}>
              <img src={li}></img>
              <img src={insta}></img>
              <img src={twitter}></img>
              <img src={fb}></img>
            </div>
          </div>
          <div className={customstyle.contactdiv3}>
            <form>
              {/*Info 1*/}
              <div className={customstyle.contactdiv3_1}>
                <div className={customstyle.contactdiv3_1_1}>
                  <label>First Name*</label>
                  <input type="text" name="Fname" required></input>
                  <br />
                  <label>Email*</label>
                  <input type="email" name="email" required></input>
                  <br />
                  <label>Company Name*</label>
                  <input type="text" name="cname" required></input>
                  <br />
                </div>

                {/*Separation*/}
                <div className={customstyle.contactdiv3_1_2}>
                  <label>Last Name*</label>
                  <input type="text" name="Lname" required></input>
                  <br />
                  <label>Phone Number*</label>
                  <input type="phone" name="phone" required></input>
                  <br />
                  <label>Company Type</label>
                  <select name="ctype" required>
                    <option>Please Select</option>
                  </select>
                  <br />
                </div>
              </div>

              {/*NEW */}
              <div className={customstyle.contactdiv3_2}>
                <div className={customstyle.contactdiv3_1_3}>
                  <p>IM LOOKING FOR:</p>
                  <input
                    type="checkbox"
                    id="Consulting"
                    name="Consulting"
                    value="Consulting"
                  ></input>
                  <label for="Consulting">Consulting</label>
                  <br />
                  <input
                    type="checkbox"
                    id="Design"
                    name="Design"
                    value="Design"
                  ></input>
                  <label for="Design">Design</label>
                  <br />
                  <input
                    type="checkbox"
                    id="Mobile_Development"
                    name="Mobile_Development"
                    value="Mobile_Development"
                  ></input>
                  <label for="Mobile_Development">Mobile Development</label>
                  <br />
                </div>
                <div className={customstyle.contactdiv3_1_4}>
                  <input
                    type="checkbox"
                    id="Web_Development"
                    name="Web_Development"
                    value="Web_Development"
                    className={customstyle.contactdiv3cb}
                  ></input>
                  <label for="Web_Development">Web Development</label>
                  <br />
                  <input
                    type="checkbox"
                    id="CloudandDevOps"
                    name="CloudandDevOps"
                    value="CloudandDevOps"
                  ></input>
                  <label for="CloudandDevOps">Cloud and DevOps</label>
                  <br />
                  <input
                    type="checkbox"
                    id="Quality_Assurance"
                    name="Quality_Assurance"
                    value="Quality_Assurance"
                  ></input>
                  <label for="Quality_Assurance">Quality Assurance</label>
                  <br />
                </div>
              </div>

              {/*Submit*/}
              <div className={customstyle.contactdiv3_3}>
                <div className={customstyle.contactdiv3_3_1}>
                  <label>MESSAGE*</label>
                  <br />
                  <textarea required></textarea>
                  <p>
                    By Ticking the checkboxes and confirming with "Submit you
                    agree with processing your personal data for the purpose of
                    entering a pre-contractual relationship. For more
                    information on how we are commited to protect and respect
                    your privacy, please check our{" "}
                    <a href="#"> Privacy Policy</a>
                  </p>
                  <input type="submit" value="submit"></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
