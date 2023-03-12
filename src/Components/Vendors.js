import React from "react";
import FooterPart from "./Home/FooterPart";

const Vendors = () => {
  return (
    <>
      <div className="container" style={{ margin: '7rem', marginTop: '3rem', marginBottom: '3rem' }}>
        <div className="row m-4">
          <dl>
            <dt className="bold">Material</dt>
            <li>
              MS Pipe, fittings, Consumables,Structural Steel, Hardware, pump
              sets, valves, Electrical panels, Cables, Instruments, RCC Hume Pipe
              etc. Saftey equipment, Fire extinguishers, Electrode, Grinding
              wheels, End seals, Casing Insulators, Coating material, Cold tape,
              Primer, Paint, Chemical tank, Chemicals, Cathodic protection
              material like Cable, Reference cells, Anodes, Thermite welding kit,
              etc.
            </li>
          </dl>
          <dl>
            <dt>Tools & Tackles</dt>
            <li>
              Standard Tool Kit, Non Sparking tools, Hydraulic & Mechanical jacks,
              Drill Machine, Hammer Drill, Welding Machine, Gas cutting set, Earth
              Resistance tester, Pipeline locator, CIPL Instrument, CAT
              Instrument, DCVG Instrument, OFC Jointing machine, Holiday tester,
              Peel tester, IS Digital multi meters, GPS Instrument, Giga Ohm
              meter, DFT Gauge, Ultrasonic thickness gauge, etc.
            </li>
          </dl>
          <dl>
            <dt>Plant & Machinery(Purchase or Hiring)</dt>
            <li>
              Batching Plant, Roller, Vibrator, DG Set, Bar Bending Machine,
              Submersible & Dewatering pump set, Air Compressor, Hydra, Crane,
              JCB, Compactor, Tractors, Porta cabin etc.
            </li>
          </dl>
          <dl>
            <dt>Sub Contractors</dt>
            <li>
              Pipeline construction, Civil jobs, Cabling & Electrical instrument
              installation, Plant & Machinary hiring, Welding & Coating repair
              jobs, Steel fabrication, Sand blasting & painting.
            </li>
          </dl>
          <dl>
            <dt>Site Support services</dt>
            <li>
              Bolero or similar vehicles on monthly hiring, Office and camp
              accommodation hiring across cross country pipeline location, Medical
              facilitiesm Security services etc.
            </li>
          </dl>
          <h5>Apply to become Registred Vendor click the below button.</h5>

        </div>
        <button className="btn btn-primary text-white mt-4">Apply Now</button>
      </div>
      <FooterPart />
    </>
  );
};

export default Vendors;
