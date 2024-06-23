import "./index.css";

import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterSection = () => (
  <div className="footer">
    <hr className="footer-hr-line" />
    <div className="footer-items-card">
      <h3 className="footer-main-text">Follow us on</h3>
      <div className="social-icons-container">
        <FaInstagram className="footer-icons" />
        <FaYoutube className="footer-icons" />
        <BsTwitterX className="footer-icons" />
        <FaFacebook className="footer-icons" />
        <FaLinkedin className="footer-icons" />
      </div>
    </div>
    <hr className="footer-hr-line" />
  </div>
);

export default FooterSection;
