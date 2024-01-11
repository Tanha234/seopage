import { Form, Button, Row, Col } from "react-bootstrap";

const Upload = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div>
        <Row className="mt-5">
            <Col className="col-md-6">
            <img style={{height:'400px'}}src="../../images/yuuu (2).png"/>
            </Col>
            <Col>   <div style={{ display: 'block', width: 700, padding: 30 }}>
        <h4>Submit some personal informations</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Enter your full name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your age:</Form.Label>
            <Form.Control type="number" placeholder="Enter your age" />
          </Form.Group>
          <Button  className="mt-4" variant="primary" type="submit">
            Click here to submit form
          </Button>
        </Form>
      </div></Col>
     
        </Row>
      
    </div>
  );
};

export default Upload;
