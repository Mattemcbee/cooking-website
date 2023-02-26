import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { selectFilteredRecipes, selectNumberOfFiltered, selectTotalNumberInRecipe, selectIngLength } from "../features/recipes/AddRecipeSlice";
import ProjectCard from "../features/meals/ProjectsCard";
import { selectAllRecipe } from "../features/recipes/AddRecipeSlice";
import { INGREDIENTS } from "../app/shared/INGREDIENTLIST";
import { PROJECTS } from "../app/shared/PROJECTS";
import samplePDF1 from "../app/assets/MattMcBeeCV.pdf";
import Header from "../components/Header";

const AboutPage = () => {

  return (
    <Container fluid className="homeBackground">
      <Header />
      
      <Row>
        <Col
          sm="size: 12"
          className=" text-center"
        >
          <h1>Connect with me </h1>
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

export default AboutPage;