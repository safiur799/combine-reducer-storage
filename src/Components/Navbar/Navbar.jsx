import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { Redirect } from "react-router";

// import HeartIcon from "@mui/material/HeartIcon";
import "./Navbar.css";
export default function Navbar({ googleUser }) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={1} className="item">
            <Link to="/home" style={{ textDecoration: "none" }}>
             
              home
            </Link>
          </Col>
          <Col xs={1} className="item">
            <Link to="/addtodo" style={{ textDecoration: "none" }}>
            
              addtodo
            </Link>
          </Col>
          <Col xs={1} className="item">
            <Link to="/donetodo" style={{ textDecoration: "none" }}>
              
              done todo
            </Link>
          </Col>
          <Col xs={8}></Col>
          <Col xs={1} className="item">
            {/* <Link to="/signup" style={{ textDecoration: "none" }}>
              signup
            </Link> */}
            {googleUser ? (
              <div className="option" onClick={() => auth.signOut()}>
                Logout
                <Redirect to="/signup" />
              </div>
            ) : (
              <Link to="/signup" style={{ textDecoration: "none" }}>
                siginUp
                <Redirect to="/home" />
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
