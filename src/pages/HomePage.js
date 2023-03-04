import { useState } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import AboutMe from "../features/meals/AboutMe";
import ServiceList from "../features/meals/ServiceList";
import LoginForm from "../components/LoginForm";
import ProjectList from '../features/meals/ProjectList'
import samplePDF1 from "../app/assets/MattMcBeeCV.pdf";
import Header from "../components/Header";


const HomePage = () => {

  return (
    <Container fluid className="homeBackground">
      <Header />
      <Row>
        <Col sm="12">
          <Container className="">
            <AboutMe />
          </Container>
        </Col>
        <Col
          sm="9"
          className=" m-auto"
        >
          <h1 className="cardStyle mx-0">My Services</h1>
          <ServiceList />

        </Col>
        <Col
          sm="size: 12"
          className=" text-center"
        >
          <h1 className="cardStyle mx-0">Projects</h1>
          <ProjectList />
          <h1 className=" fontBasic">Github:<a href={"https://github.com/Mattemcbee"} target="_blank"
            rel="noreferrer">https://github.com/Mattemcbee</a></h1>
          <h1 className=" fontBasic">LinkedIn:<a href={"https://www.linkedin.com/in/matthew-mcbee/"} target="_blank"
            rel="noreferrer"> https://www.linkedin.com/in/matthew-mcbee/</a></h1>

          <h3>Resume:<a href={samplePDF1} target="_blank"
            rel="noreferrer">
            Resume
          </a> <br></br></h3>




        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;