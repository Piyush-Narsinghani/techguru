import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW US TO <span className="purple"> INTRODUCE </span> OURSELVES
            </h1>
            <p className="home-about-body">
            Smooth transition for accelerated product adoption
              <br />
              <br /> A 24/7 consultative approach rather than a
              <i>
                <b className="purple"> transactional support. </b>
              </i>
              <br />
              <br />
              Set up simple &nbsp;
              <i>
                <b className="purple">automation functions </b> as well as leverage the built-in capabilities{" "}
                <b className="purple">
                to handle all your manual effort
                </b>
              </i>
              <br />
              <br />
              Cater to requests from multiple teams by setting up pop-up or chat widgets and dedicated helpdesk emails. <b className="purple">multiple teams</b> by setting up pop-up or
              <i>
                <b className="purple">
                  {" "}
                  chat widgets and dedicated helpdesk emails.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
