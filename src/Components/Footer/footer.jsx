import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import "./footer.css";

import { Container, Row, Col } from "react-bootstrap";

function footerWeb() {
  return (
    <div>
      <footer>
        <Container className="container">
          <Row xs={1} md={4} className="row g-4">
            <div>
              <span className="opening">SEVIMA</span>
              <h6 className="opening">
                explore the world and achieve your dreams with sevima
              </h6>
              <div className="sosmed">
                <Link
                  to={{
                    pathname: "https://id-id.facebook.com/SentraVidyaUtama/",
                  }}
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to={{
                    pathname: "https://www.instagram.com/sevima_official/",
                  }}
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to={{ pathname: "https://twitter.com/sevima_official/" }}
                  target="_blank"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to={{
                    pathname: "https://www.linkedin.com/company/sevima/",
                  }}
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
            <Col>
              <h4 className="judulFooter">Company</h4>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Support</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Privacy Police</Link>
              </li>
            </Col>
            <Col>
              <h4 className="judulFooter">Learning</h4>
              <li>
                <Link to="/">Membaca</Link>
              </li>
              <li>
                <Link to="/">Berhitung</Link>
              </li>
              <li>
                <Link to="/">Bernyanyi</Link>
              </li>
            </Col>
            <Col>
              <h4 className="judulFooter">Reference</h4>
              <li>
                <Link to="/">Learning</Link>
              </li>
              <li>
                <Link to="/">Team</Link>
              </li>
              <li>
                <Link to="/">Gallery</Link>
              </li>
            </Col>
          </Row>
        </Container>
        <div className="copyright">
          <p style={{ textAlign: "center", color: "#ffffff" }}>
            Copyright © 2022 Sevima Learning
          </p>
        </div>
      </footer>
    </div>
  );
}

export default footerWeb;
