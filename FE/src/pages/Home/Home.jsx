import Column from "../../components/Column/Column";
import Row from "../../components/Row/Row";
import Slide from "../../components/Slide";
import Title from "../../components/Title";

function Home() {
  return (
    <div className="container px-4 mx-auto">
      <Slide></Slide>
      <div className="mt-9">
        <Title>New Products</Title>
        <Row>
          <Column>1</Column>
          <Column>1</Column>
          <Column>1</Column>
          <Column>1</Column>
          <Column>1</Column>
        </Row>
      </div>
    </div>
  );
}

export default Home;
