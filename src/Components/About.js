import React from "react";
import FooterPart from "./Home/FooterPart";

const About = () => {
  return (
    <>
      <div className="container-fluid vision" style={{ margin: '4rem', width: '90%' }}>
        <div className="row">
          <h3 className="head text-center p-2">Ayur Engineering </h3>
          <p>
            Our founder and Director Mr. R Verma has the vision of providing the
            best technical services in Petroleum industries. His willingness to
            improvise is the key to the company's repulation today.
          </p>

          <p>
            We Ayur Engineering Works(AEW), believe in making the working
            manners of industries safe and better for upcoming generations. We
            have set up a goal for providing a platform for upcoming engineers
            and workers to take this oppurtunity and shine in their respective
            field.
          </p>

          <p>
            Our mission is completing the job in given time according to our
            clients requirements.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-6">
            <h1 className="head text-center">Our Vision!</h1>
            <p>
              Our ultimate Vision is our clients satisfaction. We imporvise our
              efforts day by day, in order to make ourselves ready and build a
              better well trained team for future. We create opportunities for
              fresh Engineers who are willing to make their identity in to this
              field.
            </p>
            <h1 className="head text-center">Our Mission!</h1>
            <p>To serve Indian Industry by providing quality solutions.</p>
          </div>
          <div className="col-md-6 col-sm-6">
            <img
              src="/images/mission.jpg"
              className="image-fluid animated"
              alt="img..."
            />
          </div>
        </div>
      </div>
      <FooterPart />
    </>
  );
};

export default About;
