import React from "react";
// import { Loader, LoaderOptions } from "google-maps";
import FooterPart from "./Home/FooterPart";

const Contact = () => {
  return (
    <>
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-1 col-1"></div>
          <div className="col-md-5 col-5">
            <h2 className="text-center">
              <b> Contact Us</b>
            </h2>
            <form className="row g-3">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Last Name
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-12">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-12">
                <label for="inputEmail4" className="form-label">
                  phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-5">
            <div className="row ml-5">
              <img src="/images/contact.jpeg" alt="Loading..." />
            </div>
          </div>
        </div>
      </div>
      <FooterPart />
    </>
  );
};

export default Contact;
