import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Upload = () => {
  // eslint-disable-next-line no-unused-vars

 // eslint-disable-next-line no-unused-vars
 const [imageURL, setImageURL] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const myClick=()=>{
    alert("Sucessfully added to the database");
  }
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showTextExtension, setShowTextExtension] = useState(false);
  const [showImageExtension, setShowImageExtension] = useState(false);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...files]);

    setShowImageExtension([...files].some((file) => file.type.startsWith("image/")));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "name" || name === "email") {
      setShowTextExtension(!!value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;

    const imageInput = event.target.elements.image;

    if (imageInput.files.length > 0) {
      const imageFile = imageInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const imageDataURL = reader.result;
        setImageURL(imageDataURL);

        const user = { name, email, image: imageDataURL };
        console.log(user);

        fetch("http://localhost:5000/upload", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              alert("Inserted Successfully");
              event.target.reset();
              setImageURL(""); // Reset to the default image after successful upload
            }
          });
      };

      reader.readAsDataURL(imageFile);
    } else {
      // Handle the case where no image is selected
      console.log("No image selected");
    }
  };

  return (
    <div>
      <Row className="mt-5 pt-5">
        <Col className="col-md-6">
       <img src="../../images/imk-removebg-preview.png"/>
        </Col>
        <Col>
          <div style={{ display: "block", width: 700, padding: 30 }}>
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
                <Form.Control type="file" name="image" onChange={handleFileChange} multiple id="image" accept="image/png,image/gif,image/jpg,image/jpeg" />
              </Form.Group>

              <Button className="mt-4" variant="primary" type="submit" onClick={myClick}>
                Click here to submit form
              </Button>

              <ul>
                <li>{`Name: ${formData.name}${showTextExtension ? " - " : ""}`}<span style={{ color: showTextExtension ? "red" : "black" }}>Extension: .txt</span></li>
                <li>{`Email: ${formData.email}${showTextExtension ? " - " : ""}`}<span style={{ color: showTextExtension ? "red" : "black" }}>Extension: .email</span></li>
                {selectedFiles.map((file, index) => (
                  <li key={index}>
                    {`File: ${file.name} (${file.type})${showImageExtension && file.type.startsWith("image/") ? " - " : ""}`}
                    <span style={{ color: showImageExtension && file.type.startsWith("image/") ? "red" : "black" }}>
                      {showImageExtension && file.type.startsWith("image/") ? `.Extension: .${file.type.split("/")[1]}` : ""}
                    </span>
                  </li>
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
