import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HeartFill, EnvelopeFill, PhoneFill } from "react-bootstrap-icons";
// import { EnvelopeFill,HeartFill,PhoneFill } from 'react-bootstrap-icons';
// import { UseSelector } from 'react-redux';
import { Link } from "react-router-dom";
// import { Connect } from 'react-redux';
// import { useState,useEffect } from 'react';

const TopHeader = () => {
  return (
    <>
      <section className="header-top bg-dark text-white p-2 sticky-top shadow">
        <Container>
          <Row>
            <Col className="text-start d-flex flex-row shadow py-2 ">
              <div className="me-5">
                <EnvelopeFill className="me-2"></EnvelopeFill>
                mahdy@gmail.com
              </div>
              <div className="me-5">
                <PhoneFill className="me-2"></PhoneFill>
                09380325329
              </div>
            </Col>
            <Col className="text-end d-flex flex-row justify-content-end">
              <div className="me-5">
                <Link to="#" className="text-white text-decoration-none  ">
                  <div className="head-body-inner">
                    <HeartFill className="me-2 "></HeartFill>
                    Wish List
                    <span className="ms-1"> (0)</span>
                  </div>
                </Link>
              </div>
              <div className="me-5">
                <Link to="#" className="text-white text-decoration-none ">
                  <div className="head-body-inner">
                    <HeartFill className="me-2  "></HeartFill>
                    Shopping Cart
                    <span className="ms-1"> (0)</span>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TopHeader;
