import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/profile-photo.JPG";
import "../style/About.css";

function About() {
  return (
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  Linh Tran
                </Card.Title>
                <Card.Text>
                  With over 10 years of experience in the clinical diagnostics field, I have taken a big leap
                  by enrolling in the UW Coding Bootcamp program. Taking this first step in pursuing a
                  completely different field of interest has been no easy feat but is most definitely an
                  interesting one!
                </Card.Text>
                <Card.Text>
                  In my spare time, I love snuggling up with my dog. And when I can get away from the day to
                  day, you can probably find me on the other side of the Earth exploring history and all the
                  amazing
                  cultures that the world has to offer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;