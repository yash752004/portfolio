import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiVite, SiDocker, SiAmazonaws, SiGithub } from "react-icons/si";
import { MdGroups, MdBugReport, MdWork } from "react-icons/md";
import dipclogo from "../../Assets/DIPC.png"; // cleaner direct logo URL

function Experience() {
  const experiences = [
    {
      icon: <MdWork />,
      title: "Full Stack Developer, DIPC Software",
      duration: "Sep 2023 - July 2025",
      logo: dipclogo, // cleaner direct logo URL
      points: [
        "Worked with Vite, TypeScript, and Node.js to build full-stack applications.",
        "Implemented cloud deployment using AWS Lightsail and ECS for scalable production.",
        "Configured CI/CD pipelines and used Docker for containerized builds.",
        "Enhanced debugging and problem-solving skills through real-world tasks.",
        "Collaborated in agile teams and participated in client requirement meetings.",
        "Developed a holistic understanding of the full software development lifecycle."
      ],
      techIcons: [
        <SiVite />, <SiTypescript />, <FaNodeJs />, <SiAmazonaws />, <SiDocker />, <SiGithub />, <MdGroups />, <MdBugReport />
      ]
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {experiences.map((exp, index) => (
        <Col md={10} key={index}>
          <Card
            className="p-4 mb-4 position-relative"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(168, 85, 247, 0.3)",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
              color: "#f5f5f5",
            }}
          >
            {/* Logo in top-right */}
            <img
              src={exp.logo}
              alt="Company Logo"
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                width: "60px",
                height: "auto",
                objectFit: "contain",
                borderRadius: "10px",
                backgroundColor: "white",
                padding: "5px"
              }}
            />

            <Card.Body>
              {/* Header */}
              <div className="d-flex flex-column align-items-center mb-4">
                <div style={{ fontSize: "2.5rem", color: "#a855f7", marginBottom: "12px" }}>{exp.icon}</div>
                <h4 style={{ fontWeight: "600", marginBottom: "4px", textAlign: "center" }}>{exp.title}</h4>
                <div
                  style={{
                    background: "#a855f7",
                    color: "white",
                    padding: "2px 10px",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: "500"
                  }}
                >
                  {exp.duration}
                </div>
              </div>

              {/* Bullet Points */}
              <ul style={{ paddingLeft: "1.5rem", textAlign: "left", lineHeight: "1.6" }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}>{point}</li>
                ))}
              </ul>

              {/* Tech Icons */}
              <div
                className="d-flex flex-wrap justify-content-center mt-4"
                style={{ gap: "16px" }}
              >
                {exp.techIcons.map((icon, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "rgba(168, 85, 247, 0.1)",
                      border: "1px solid rgba(168, 85, 247, 0.4)",
                      color: "#a855f7",
                      fontSize: "1.6rem",
                      padding: "10px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Experience;
