import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";

const FooterPart = () => {
  return (
    <>
      <footer className="bd-footer bg-dark py-2 bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 col-6 mb-3">
              <h5>About Ayur Engineering Works</h5>
              <br />
              <ul className="text-decoration-none">
         
                <h5>
                If you are in search of a material handling equipment manufacturer and service provider who blends technology, innovation, and the best-quality equipment and offer solutions at the best prices, your search ends at the doorstep of Ayur Engineering Works!
                </h5>
              </ul>
            </div>
            <div className="col-6 col-lg-4 offset-lg-1 mb-3">
              <h5>Company</h5>
              <br />
              <ul className="text-decoration-none">
                <li>
                  <a
                    href="/material/"
                    className=" mb-3 mb-lg-0 me-lg-auto  text-decoration-none"
                  >
                    Material Handling
                  </a>
                </li>
                <li>
                  <a
                    href="/services/"
                    className=" mb-3 mb-lg-0 me-lg-auto  text-decoration-none"
                  >
                    Services
                  </a>
                </li>
            
              </ul>
            </div>

            <div className="col-6 col-lg-3 mb-3">
              <h5>Contact Us</h5>
<br />
              <h6>Registered Office</h6>
              <a href="/contact" className='text-decoration-none'>
                <p>
                  Green Vihar Colony, Buria Chowk,
                  <br />
                  Jagadhri - 135003, Yamuna Nagar, <br /> Haryana, India{" "}
                </p>
              </a>
              <h6>Communication Address:</h6>
              <a href="/contact" className='text-decoration-none'>
                <p>
                  Shop No. 26, Joginder Market,
                  <br /> Yamuna Nagar-135001, <br /> Haryana, India
                </p>
              </a>
              <FaPhoneAlt /><a href="/+91 7015043643/" className='text-decoration-none'>&nbsp; +91 7015043643</a><br />
              <FaEnvelopeOpenText /><a href="/ayurengineering@outlook.com/"  className='text-decoration-none'>
                &nbsp; ayurengineering@outlook.com</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterPart;
