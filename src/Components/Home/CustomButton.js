import React from 'react'

const CustomButton = () => {
  return (
    <>
      <div className="bg-dark text-secondary px-4 py-5 my-5 text-center">
            <div className="py-5">
              <h1 className="display-5 fw-bold text-white">Ayur Engineering</h1>
              <div className="col-lg-6 mx-auto">
                <p className="fs-5 mb-4">
                  We Ayur Engineering Works(AEW), believe in making the working
                  manners of industries safe and better for upcoming
                  generations. We have set up a goal for providing a platform
                  for upcoming engineers and workers to take this oppurtunity
                  and shine in their respective field.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <a href='/material/' className='text-decoration-none'> <button
                    type="button"
                    className="btn btn-outline-warning btn-lg px-4 m-3 me-sm-3 fw-bold"
                  >
                     Products
                  </button></a>
                 
                  
                  <a href='/contact/' className='text-decoration-none'> <button
                    type="button"
                    className="btn btn-outline-warning btn-lg px-4 m-3 me-sm-3 fw-bold"
                  >
                     Contact Us
                  </button></a>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default CustomButton;
