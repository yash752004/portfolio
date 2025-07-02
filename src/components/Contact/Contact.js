import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Alert from "./Alert";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [alert, setAlert] = useState({ visible: false, type: "", message: "" });

 
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setAlert({ visible: true, type: "error", message: "Please fill all the fields" });
            return;
        }

        // Simulate CSV saving logic here...

        setAlert({ visible: true, type: "success", message: "Message submitted successfully!" });

        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            <Container fluid className="about-section">
                <Container>
                    <Row className="align-items-center" style={{ minHeight: "100vh" }}>
                        <Col md={6}>
                            <h1 className="purple mb-4">Get in Touch</h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label className="text-white">Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={{ background: "transparent", color: "white", borderColor: "#c889e6" }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="text-white">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{ background: "transparent", color: "white", borderColor: "#c889e6" }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label className="text-white">Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        rows={4}
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        style={{ background: "transparent", color: "white", borderColor: "#c889e6" }}
                                    />
                                </Form.Group>

                                <Button variant="outline-light" type="submit" className="mt-2">
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                        <Col md={6} className="text-center mt-5 mt-md-0">
                            <img
                                src='about.png'
                                alt="contact illustration"
                                className="img-fluid"
                                style={{ maxHeight: "400px" }}
                            />
                        </Col>
                    </Row>
                 
                </Container>
            </Container>

            {alert.visible && (
                <Alert
                    type={alert.type}
                    message={alert.message}
                    onClose={() => setAlert({ ...alert, visible: false })}
                />
            )}
        </>
    );
}

export default Contact;
