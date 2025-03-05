import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Navbars() {
  return (
    <Navbar className="bg-body-tertiary vw-100" data-bs-theme="dark">
      <Container className="justify-content-center">
        <Navbar.Brand>To Do App</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
