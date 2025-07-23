import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProjectCard(props) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const modalContentStyle = {
    backgroundColor: "rgba(20, 20, 30, 0.95)",
    color: "white",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
  };

  const tagStyle = {
    backgroundColor: "#a855f7",
    color: "#fff",
    fontSize: "0.75rem",
    padding: "4px 10px",
    borderRadius: "12px",
    fontWeight: "500",
    marginRight: "8px",
    marginTop: "8px",
    display: "inline-block",
  };

  return (
    <>
      <Card
        className="project-card-view"
        style={{
          backgroundColor: "#1e1e2f",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(168, 85, 247, 0.2)",
        }}
      >
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

          <div style={{ marginTop: "10px" }}>
            {props.tags &&
              props.tags.map((tag, index) => (
                <span key={index} style={tagStyle}>
                  #{tag}
                </span>
              ))}
          </div>

          {/* Live Link Button */}
          {props.liveLink && (
            <Button
              variant="success"
              href={props.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "15px", marginRight: "10px" }}
            >
              🔗 Live
            </Button>
          )}

          <Button
            variant="outline-light"
            onClick={handleShow}
            style={{ marginTop: "15px" }}
          >
            View Details
          </Button>
        </Card.Body>
      </Card>

      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        centered
        contentClassName="custom-modal-content"
        dialogClassName="custom-modal-dialog"
      >
        <div style={modalContentStyle}>
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title style={{ color: "#a855f7" }}>
              {props.title} - Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {/* Left: Description (fixed height & centered) */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: "100%",
                }}
              >

                <h5 style={{ color: "#a855f7" }}>Description</h5>
                <p style={{ textAlign: "justify" }}>{props.fullDescription}</p>
              </div>

              {/* Right: Images stacked vertically */}
              <div
                style={{
                  flex: 1,
                  maxHeight: "400px",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  paddingRight: "5px",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#a855f7 transparent",
                }}
              >
                {props.imgGallery && props.imgGallery.length > 0 ? (
                  props.imgGallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Preview ${idx}`}
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        objectFit: "cover",
                        maxHeight: "200px",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseOver={e => {
                        e.currentTarget.style.transform = "scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.2)";
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  ))
                ) : props.imgPath ? (
                  <img
                    src={props.imgPath}
                    alt="Project"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      objectFit: "cover",
                      maxHeight: "300px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      color: "#ccc",
                      textAlign: "center",
                      padding: "20px",
                      fontStyle: "italic",
                    }}
                  >
                    No images available.
                  </div>
                )}
              </div>

            </div>
          </Modal.Body>

        </div>
      </Modal>
    </>
  );
}

export default ProjectCard;
