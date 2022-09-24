import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function CFCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm<span className="purple"> Simreet Kaur </span>
            <br></br>
            Co-Founder of <span className="purple"> TECHGURU SERVICES PVT. LTD.</span>
          </p>
          <ul>
            <li className="about-activity ">
              <ImPointRight /> My goal is to work as a software engineer.
            </li>
            <li className="about-activity">
              <ImPointRight /> I graduated from Lovely Professional University with a master's in computer applications.
            </li>
            <li className="about-activity">
              <ImPointRight /> I received a bachelor's degree in computer applications from Guru Nanak Dev University.
            </li>
            <li className="about-activity">
              <ImPointRight /> I adore coding.
            </li>
          </ul>
          <footer className="blockquote-footer">Co-Founder| SIMREET KAUR</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default CFCard;
