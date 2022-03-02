import React from 'react'
import FooterPart from './Home/FooterPart';

const Services = () => {
  return (
    <>
      <div class="container my-4">
        <h1 className='text-center'><b>Our Services</b></h1>
        <div class="row mb-2">
            
            <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="/images/unit1a.jpg" class="d-block mx-lg-auto img-fluid" alt="..." width="500" height="400" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Fabrication Job Work</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
          
        </div>
      </div>
    </div>
  </div>
            <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Fabrication Job Work</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
          
        </div>
      </div>
        <div class="col-10 col-sm-8 col-lg-6">
        <img src="/images/steel fabrication.jpg" class="d-block mx-lg-auto img-fluid" alt="..." width="500" height="400" loading="lazy"/>
      </div>
    </div>
  </div>
            </div>
            </div>
      <FooterPart />

    </>
  )
}

export default Services;
