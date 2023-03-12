import React from "react";

const CarouselPart = () => {
  return (
    <div>
      <div className="container-fluid m-0 p-0 carousel1">
        <div id="mySlider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/2100x750/?engineer,electrical"
                className="imgHome "
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="ayurhead">
                  <b>Ayur Engineering Works</b>
                </h1>
                <p>COMMIT TO BEST OUTCOMES AND EXPERIENCE</p>
                <a href="/about/" className="text-decoration-none">
                  <button className="btn btn-outline-success btn-lg px-4 m-3 me-sm-3 fw-bold">
                    Learn More
                  </button>
                </a>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/2100x750/?engineer,mechanical"
                className="imgHome "
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="ayurhead">
                  <b>Ayur Engineering Works</b>
                </h1>
                <p>COMMIT TO BEST OUTCOMES AND EXPERIENCE</p>
                <a href="/services/" className="text-decoration-none">
                  <button className="btn btn-outline-info btn-lg px-4 m-3 me-sm-3 fw-bold">
                    Our Services
                  </button>
                </a>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/2100x750/?engineer,metal"
                className="imgHome "
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="ayurhead">
                  <b>Ayur Engineering Works</b>{" "}
                </h1>
                <p>COMMIT TO BEST OUTCOMES AND EXPERIENCE</p>
                <a href="/contact/" className="text-decoration-none">
                  <button className="btn btn-outline-warning btn-lg px-4 m-3 me-sm-3 fw-bold">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            data-bs-target="#mySlider"
            data-bs-slide="prev"
            href="#"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </a>

          <a
            className="carousel-control-next"
            data-bs-target="#mySlider"
            data-bs-slide="next"
            href="#"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselPart;
