import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="CareHQ"
              description="Health monitoring app for hazardous environments."
              fullDescription="Engineered a health monitoring system CareHQ using Vite, TypeScript, designed for staff operating in hazardous
environments. The platform allows uploading of staff profiles and medical records, facilitates consultations, highlights
abnormal health conditions, and integrates comprehensive checklists for ambulance preparedness and medicine inventory.
This system improves on-site safety compliance and supports proactive health management across the organization.."
              imgPath="images/carehq/1.png"
              imgGallery={["images/carehq/1.png", "images/carehq/2.png", "images/carehq/3.png", "images/carehq/4.png", "images/carehq/5.png", "images/carehq/6.png", "images/carehq/7.png"]}
              tags={["react", "vite", 'restApi', "typescript", "docker"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="WireTime"
              description="Workforce management platform."
              fullDescription="Developed a workforce management platform used by 50+ team members to track tasks and time, improving productivity by
40%. WireTime using Vite, TypeScript, React (MUI). The application streamlines task assignment, real-time punch-in/out
tracking with geolocation, leave management, and automated email notifications. Additional modules include user profile
customization and a dynamic dashboard, empowering managers with clear visibility into project progress and team
productivity."
              imgPath="images/WireTime/1.jpeg"
              imgGallery={["images/WireTime/1.jpeg", "images/WireTime/2.jpeg", "images/WireTime/3.png", "images/WireTime/4.png", "images/WireTime/5.png", "images/WireTime/6.png", "images/WireTime/7.jpeg"]}
              tags={["vite", 'restApi', "typescript", "docker"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Sports Portal"
              description="Interactive sports training portal"
              fullDescription="Developed an interactive Sports Portal using React, enabling users to explore training batches based on location and age
group, choose from multiple packages, and seamlessly complete online payments. The platform features a dynamic landing
page for user engagement and streamlines the booking process for sports programs. On the admin side, it supports batch
creation, with functionalities to add trainers, configure package pricing, assign time slots, and monitor user activity. This system
enhances operational efficiency and provides a unified interface for both users and administrators in managing sports training
programs.
"
              imgPath="images/sportsportal/1.png"
              imgGallery={["images/sportsportal/1.png", "images/sportsportal/2.png", "images/sportsportal/3.png", "images/sportsportal/4.png", "images/sportsportal/5.png"]}
              tags={["react", 'MUI', 'css', "docker", 'restApi']}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
