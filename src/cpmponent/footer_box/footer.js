import React from "react";
import { Box, Column, FooterLink, Social } from "./footer_style";
import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Twitter,
  EnvelopeFill,
  PhoneFill,
  Globe,
} from "react-bootstrap-icons";
// import FormEmail from "./email";
// import FormSubscript from "./form_subscript";

const Footer = () => {
  return (
    <>
      <Box>
        <Container>
          <Row>
            <Col>
              <div>
                <h6 className="mb-4">SIGN UP FOR‌OUR‌NEWSLETTER</h6>
                {/* <FormSubscript /> */}
                <FooterLink href="/">
                  <Social className="me-3">
                    <Facebook />
                  </Social>
                </FooterLink>
                <FooterLink href="/">
                  <Social className="me-3">
                    <Twitter />
                  </Social>
                </FooterLink>
                <FooterLink href="/">
                  <Social className="me-3">
                    <Instagram />
                  </Social>
                </FooterLink>
              </div>
            </Col>
            <Col>
              <div className="ps-3">
                <h6 className="mb-4">Pages</h6>
                <Column>
                  <FooterLink href="/">Home</FooterLink>
                  <FooterLink href="/">About</FooterLink>
                  <FooterLink href="/">Women</FooterLink>
                  <FooterLink href="/">Men</FooterLink>
                  <FooterLink href="/">Access</FooterLink>
                  <FooterLink href="/">Contact</FooterLink>
                </Column>
              </div>
            </Col>
            <Col>
              <div>
                <h6 className="mb-4">Contact Us</h6>
                <Column>
                  <FooterLink href="/">
                    <EnvelopeFill className="me-2" />
                    test@gmail.com
                  </FooterLink>
                  <FooterLink href="/">
                    <PhoneFill className="me-2" />
                    09380325329
                  </FooterLink>
                  <FooterLink href="/">
                    <Globe className="me-2" />
                    Iran Mashhad Kuy-e-Tollab
                  </FooterLink>
                  <FooterLink href="/"></FooterLink>
                </Column>
              </div>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
