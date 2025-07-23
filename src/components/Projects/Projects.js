import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import thumbail1 from "../../Assets/images/carehq/1.png";
import carehq2 from "../../Assets/images/carehq/2.png";
import carehq3 from "../../Assets/images/carehq/3.png";
import carehq4 from "../../Assets/images/carehq/4.png";
import carehq5 from "../../Assets/images/carehq/5.png";
import carehq6 from "../../Assets/images/carehq/6.png";
import carehq7 from "../../Assets/images/carehq/7.png";

import wiretime1 from "../../Assets/images/WireTime/1.jpeg";
import wiretime2 from "../../Assets/images/WireTime/2.jpeg";
import wiretime3 from "../../Assets/images/WireTime/3.png";
import wiretime4 from "../../Assets/images/WireTime/4.png";
import wiretime5 from "../../Assets/images/WireTime/5.png";
import wiretime6 from "../../Assets/images/WireTime/6.png";
import wiretime7 from "../../Assets/images/WireTime/7.jpeg";

import sports1 from "../../Assets/images/sportsportal/1.png";
import sports2 from "../../Assets/images/sportsportal/2.png";
import sports3 from "../../Assets/images/sportsportal/3.png";
import sports4 from "../../Assets/images/sportsportal/4.png";
import sports5 from "../../Assets/images/sportsportal/5.png";

import inventoryscan1 from "../../Assets/images/inventoryscan/1.png";
import inventoryscan2 from "../../Assets/images/inventoryscan/2.png";

import gemini1 from "../../Assets/images/chatapp/1.png";
import gemini2 from "../../Assets/images/chatapp/3.png";
import gemini3 from "../../Assets/images/chatapp/7.png";
import gemini4 from "../../Assets/images/chatapp/4.png";
import gemini5 from "../../Assets/images/chatapp/5.png";
import gemini6 from "../../Assets/images/chatapp/6.png";

import ecommerse0 from "../../Assets/images/Ecommerse/0.png";
import ecommerse1 from "../../Assets/images/Ecommerse/1.png";
import ecommerse2 from "../../Assets/images/Ecommerse/2.png";
import ecommerse3 from "../../Assets/images/Ecommerse/3.png";
import ecommerse4 from "../../Assets/images/Ecommerse/4.png";
import ecommerse5 from "../../Assets/images/Ecommerse/5.png";
import ecommerse6 from "../../Assets/images/Ecommerse/6.png";

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
              title="Jewellery Ecommerce App"
              description="Ecommerce platform for jewellery with product catalog."
              fullDescription="Developed a comprehensive Ecommerce platform for jewellery, Home page with diffrent diffrent categories."
              imgPath={ecommerse0}
              imgGallery={[ecommerse0, ecommerse1, ecommerse2, ecommerse3, ecommerse4, ecommerse5, ecommerse6]}
              tags={['React', 'Tailwind CSS', 'JavaScript', 'NodeJs', 'Express', 'MongoDB']}
              liveLink="https://jewellery-ecommerce-flax.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Gemini Chat App"
              description="AI-powered chat interface with OTP login, chatrooms, image upload, and pagination."
              fullDescription="Built a Gemini-style conversational AI chat application with features like OTP-based authentication, multi-chatroom management, real-time AI message simulation, image uploads, and reverse infinite scroll with pagination. Implements Redux for state management, form validation with React Hook Form + Zod, and a polished, responsive UI using Material UI. Dark mode, scroll-to-bottom, and keyboard accessibility are also integrated for a complete UX."
              imgPath={gemini1}
              imgGallery={[gemini1, gemini2, gemini3, gemini4, gemini5, gemini6]}
              tags={['React', 'Redux', 'Material UI', 'Zod', 'JavaScript']}
              liveLink="https://gemini-chat-app-gamma.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="CareHQ"
              description="Health monitoring app for hazardous environments."
              fullDescription="Engineered a health monitoring system CareHQ using Vite, TypeScript, designed for staff operating in hazardous
environments. The platform allows uploading of staff profiles and medical records, facilitates consultations, highlights
abnormal health conditions, and integrates comprehensive checklists for ambulance preparedness and medicine inventory.
This system improves on-site safety compliance and supports proactive health management across the organization."
              imgPath={thumbail1}
              imgGallery={[thumbail1, carehq2, carehq3, carehq4, carehq5, carehq6, carehq7]}
              tags={["react", "vite", 'restApi', "typescript", "docker"]}
            // liveLink="https://carehq.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="WireTime"
              description="Streamlined workforce and productivity management tool."
              fullDescription="Developed a workforce management platform used by 50+ team members to track tasks and time, improving productivity by
40%. WireTime using Vite, TypeScript, React (MUI). The application streamlines task assignment, real-time punch-in/out
tracking with geolocation, leave management, and automated email notifications. Additional modules include user profile
customization and a dynamic dashboard, empowering managers with clear visibility into project progress and team
productivity."
              imgPath={wiretime1}
              imgGallery={[wiretime1, wiretime2, wiretime3, wiretime4, wiretime5, wiretime6, wiretime7]}
              tags={["vite", 'restApi', "typescript", "docker"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Sports Portal"
              description="Web-based sports training system with booking, payment, and admin controls."
              fullDescription="Developed an interactive Sports Portal using React, enabling users to explore training batches based on location and age
group, choose from multiple packages, and seamlessly complete online payments. The platform features a dynamic landing
page for user engagement and streamlines the booking process for sports programs. On the admin side, it supports batch
creation, with functionalities to add trainers, configure package pricing, assign time slots, and monitor user activity. This system
enhances operational efficiency and provides a unified interface for both users and administrators in managing sports training
programs.
"
              imgPath={sports1}
              imgGallery={[sports1, sports2, sports3, sports4, sports5]}
              tags={["react", 'MUI', 'css', "docker", 'restApi']}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Inventory Scan"
              description="Web-based inventory scan system with save data in json or csv."
              fullDescription="Built a web-based Inventory Scan system with barcode scanning to simplify inventory management. Users can scan items, view data in a structured format, and export it as JSON or CSV. The app also supports importing inventory from JSON or CSV files, enabling easy updates. Designed with a user-friendly interface for fast, accurate inventory tracking in retail or warehouse settings."
              imgPath={inventoryscan1}
              imgGallery={[inventoryscan1, inventoryscan2]}
              tags={['HTML', 'CSS', 'JavaScript', 'JSON']}
              liveLink="https://inventory-check-seven.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
