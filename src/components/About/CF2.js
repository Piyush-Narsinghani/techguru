import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function CF2Card() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm<span className="purple"> Gaurav Jindal </span>
            <br></br>
            Co-Founder of <span className="purple"> TECHGURU SERVICES PVT. LTD.</span>
          </p>
          <ul>
            <li className="about-activity ">
              <ImPointRight /> CEO- MAYA GARDEN GROUP PVT. LTD.
            </li>
            <li className="about-activity">
              <ImPointRight /> CFO- Trident industries pvt. ltd.
            </li>
            <li className="about-activity">
              <ImPointRight /> Director- MRM group of Computers pvt. ltd.
            </li>
          </ul>
          <footer className="blockquote-footer">Co-Founder| GAURAV JINDAL</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default CF2Card;
