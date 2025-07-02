import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate <b className="purple">Full Stack Developer</b> with hands-on experience in building scalable and efficient web applications.
              <br />
              <br />
              My core tech stack includes&nbsp;
              <i>
                <b className="purple">JavaScript, TypeScript, React.js, Node.js, and Express.js</b>
              </i>
              , and I’m proficient with modern build tools like Vite and version control using Git & GitHub.
              <br />
              <br />
              I’m enthusiastic about crafting&nbsp;
              <i>
                <b className="purple">clean UI/UX and full-stack web solutions</b>
              </i>
              , and I’ve built real-world projects using <b className="purple">MongoDB, MySQL</b>, and containerized apps with <b className="purple">Docker</b>.
              <br />
              <br />
              I also have experience deploying applications on&nbsp;
              <b className="purple">AWS (Lightsail, ECS)</b> and using <b className="purple">Firebase</b> for backend integration.
              <br />
              <br />
              I enjoy collaborating with teams, tackling engineering challenges, and delivering impactful products that solve real problems.
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
