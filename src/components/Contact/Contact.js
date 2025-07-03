import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Alert from "./Alert";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import emailjs from 'emailjs-com';
import ContactImage from "../../Assets/about.png"; // Adjust the path as necessary
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
            setTimeout(() => {
                setAlert({ visible: false, type: "", message: "" });
            }, 2000);
            return;
        }

        emailjs.send(
            'service_r00qv2b',
            'template_f3733d9',
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            'pSnuKTyHtXF0V1iGa' // previously USER_ID
        )
            .then(() => {
                setAlert({ visible: true, type: "success", message: "Message submitted successfully!" });
                setTimeout(() => {
                    setAlert({ visible: false, type: "", message: "" });
                }, 2000);
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error(error);
                setAlert({ visible: true, type: "error", message: "Error submitting form." });
                setTimeout(() => {
                    setAlert({ visible: false, type: "", message: "" });
                }, 2000);
            });
    };




    return (
        <>
            <Container fluid className="about-section" >

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
                                        style={{ background: "transparent", color: "white", borderColor: "#c889e6", resize: "none", }}
                                    />
                                </Form.Group>

                                <Button variant="outline-light" type="submit" className="mt-2">
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                        <Col md={6} className="text-center mt-5 mt-md-0">
                            <Tilt>
                                <img
                                    src={ContactImage}
                                    alt="contact illustration"
                                    className="img-fluid"
                                    style={{ maxHeight: "400px" }}
                                />
                            </Tilt>
                        </Col>
                    </Row>

                </Container>
                <Particle />
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
