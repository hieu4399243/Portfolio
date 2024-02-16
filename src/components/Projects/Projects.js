import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FPTUPAY-ewallet"
              description="FPTUPay is an e-wallet project aimed at enhancing services for students at FPT University
              campuses. The project offers fast and convenient money transfer, deposit, withdrawal, and
              school fee payment services. It addresses the issue of withdrawing money from FAP to the
              wallet, allowing the school’s bonuses for students to be directly transferred to the wallet
              without the need for application or waiting. The project employs microservices and utilizes
              Java for backend development and JavaScript for mobile and frontend development. The
              environment is run on Kubernetes (k8s) and includes built-in tools such as Rancher, ELK,
              Grafana, Longhorn, Kafka, Jenkins, Sonarqube, Argo-cd, Minio, Harbor (Registry), and
              Debezium to support operations. FPTUPay is poised to provide superior student services and is
              the first university in Vietnam to have its own e-wallet."
              ghLink="https://github.com/fptupay/mobile-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Toan cham Restaurant"
              description="Create a beautiful and user-friendly website for a restaurant, where customers can view the
              menu, choose dishes, choose the menus they want to order and then contact the restaurant via
              zalo or phone number. phone. The product uses technologies such as HTML, CSS, JavaScript."
              ghLink="https://github.com/hieu4399243/ToanChamRestaurant.git"
              demoLink="http://cosolamcotoancham.me/ToanChamRestaurant/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio"
              description="The website provides personal information, past and ongoing projects, along with the use of tools and languages that have been and are being used. The website is written in ReactJS language with the combination of libraries for integration and to solve the requirements of the problem."
              ghLink="https://github.com/hieu4399243/Portfolio.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Sportify app"
              description="- Building beautiful User Interfaces with React Native
              - Spotify API integration
              - Integrating GraphQL with StepZen
              - Custom app development for music streaming
              - Implementing favorites and playlists
              - Creating a music player for song previews
              - Designing and implementing a flexible and efficient API using GraphQL and StepZen"
              ghLink="https://github.com/hieu4399243/SpotifyVersion2.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Dating app"
              description="Full Stack Dating App development journey with REACT NATIVE! 🚀 In this live coding session, we'll embark on a thrilling adventure of creating a feature-rich dating application using the power of React Native, MongoDB, and Socket IO."
              ghLink="https://github.com/hieu4399243/Dating-app.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Order Pizza app"
              description="Full Stack Mobile Development .Combining React Native and Supabase, mastering the necessary skills to create strong and scalable mobile applications. Building a Food Ordering Application with a beautiful Frontend and powerful backend.."
              ghLink="https://github.com/hieu4399243/Pizza.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
