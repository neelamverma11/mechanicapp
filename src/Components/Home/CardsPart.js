import React from 'react'

const CardsPart = () => {
  return (
    <>
      <div
        className="container-fluid bg-dark px-4 py-5 m-0 mt-5"
        id="custom-cards"
      >
        <h2 className="pb-2 border-bottom text-center">Our Services</h2>
        <p className="pb-2 border-bottom text-center">
          <span>

            AYUR provides Engineering, Design and Project Management for the
            Industrial Projects in Oil / Gas,
            <br /> Petrochemicals, Refinery, Fertilizers and Steel sectors.
          </span>
        </p>
        <div className="row card-row row-cols-1 row-cols-lg-3  g-4" style={{ margin: "35px" }}>
          <div className="col">
            <div className="card">
              <img
                src="/images/02.png"
                alt="Avatar"
                style={{ width: "100%" }}
              />
              <div className="container p-2">
                <h6>
                  <b>PIPING DESIGN</b>
                </h6>
                <p>
                  Plot Plan, Piping Layouts, Isometrics, Typical Pipeline
                  Drawings, Site Specific Crossing.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="/images/01.png"
                alt="Avatar"
                style={{ width: "100%" }}
              />
              <div className="container p-2">
                <h6>
                  <b>PIPING MATERIAL</b>
                </h6>
                <p>
                  Review FEED / Licensor documents for basic estimation for
                  creation of pipe classes
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="/images/03.png"
                alt="Avatar"
                style={{ width: "100%" }}
              />
              <div className="container p-2">
                <h6>
                  <b>PIPING-STRESS ENGINEERING</b>
                </h6>
                <p>
                  Static Stress Analysis Dynamic Stress Analysis Transient
                  Analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardsPart;
