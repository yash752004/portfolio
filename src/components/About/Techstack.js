import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import {
  SiTypescript,
  SiMysql,
  SiJson,
  SiExpress,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiExpress />, name: "RESTful API" },
    { icon: <SiJson />, name: "JSON" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
           style={{ color: "white" }}
        >
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
