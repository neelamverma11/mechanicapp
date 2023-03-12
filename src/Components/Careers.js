import React, { useState } from "react";
import FooterPart from "./Home/FooterPart";

const Careers = () => {
  const [singleFile, setSingleFile] = useState("");

  const signleFileChange = (e) => {
    setSingleFile(e.target.files);
  };
  const uploadSingleFile = () => {
    console.log(singleFile);
  };
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row m-3">
          <div className="col-md-5">
            <h1 className="text-center">Apply Here!</h1>
            <form className="row g-3 mt-3">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
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

              <div className="col-md-8">
                <label>Select Resume</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => signleFileChange(e)}
                />
              </div>
              <div className="col-md-4 mt-5">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => uploadSingleFile()}
                >
                  Upload
                </button>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="row mt-5">
              <img src="/images/resume.jpeg" alt="Loading..." />
            </div>
          </div>
        </div>
      </div>
      <FooterPart />
    </div>
  );
};

export default Careers;
