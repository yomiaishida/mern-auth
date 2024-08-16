import { Container, Card, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items center">
          <h1 className="text-center mb-4">MERN App</h1>
          <p className="text-center mb-4">
            This is a boilerplate for MERN Auth App that stores a JWT in an
            HTTP-Only cooki. It also uses Redux Toolkit and the React Bootstrap
            library
          </p>
          <div className="d-flex">
            <Button variant="primary" href="/login" className="me-3">
              Sign In
            </Button>
            <Button variant="secondary" href="/register">
              Sign Up
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
