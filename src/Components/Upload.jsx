import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Upload = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    
  });
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...files]);
    // console.log('yes');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   

    

   
    setFormData({
      name: "",
      email: "",
    });
    setSelectedFiles([]);
  };

  return (
    <div>
      <Row className="mt-5 pt-5">
        <Col className="col-md-6">
          <img style={{ height: '400px' }} src='../../images/imk-removebg-preview.png' alt="Your Image Alt Text" />
        </Col>
        <Col>
          <div style={{ display: 'block', width: 700, padding: 30 }}>
            <h4>Submit some information</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Enter your full name:</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Enter your email address:</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email address" required />
              </Form.Group>

              <Form.Group>
                <Form.Label>Upload your image:</Form.Label>
                <Form.Control  value={formData.image} type="file" onChange={handleFileChange} multiple />
              </Form.Group>

              <Button className="mt-4" variant="primary" type="submit">
                Click here to submit form
              </Button>

              <ul>
                <li>{`Name: ${formData.name}`}</li>
                <li>{`Email: ${formData.email}`}</li>
                {selectedFiles.map((file, index) => (
                  <li key={index}>{`File: ${file.name} (${file.type}) - Extension: ${file.name.split('.').pop()}`}</li>
                ))}
              </ul>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Upload;
