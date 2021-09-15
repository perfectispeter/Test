import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "#FC8268",
          textAlign: "center",
          marginTop: "-50px",
          fontFamily: "sans-serif",
        }}
      >
        Upper Murray Community Calendar: One stop for all updates
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Our Vision</FooterLink>
            <FooterLink href="#">Our Mission</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="https://corryongnc.org/">
              Corryong Neighbourhood Centre
            </FooterLink>
            <FooterLink href="https://corryongnc.org/upper-murray-innovation-foundation/">
              Upper Murray Community Bakery(Image)
            </FooterLink>
            <FooterLink href="#">
              Upper Murray Community Garage(Image)
            </FooterLink>
            <FooterLink href="#">
              Upper Murray Innovation Foundation(Image)
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://corryongnc.org/">
              Corryong Neighbourhood Centre (CNC)
              <a style={{ color: "#FC8268" }} href="tel:(02) 6076 2176">
                (02) 6076 2176
              </a>
            </FooterLink>
            <FooterLink href="https://corryongnc.org/upper-murray-community-bakery/">
              Upper Murray Community Bakery
              <a style={{ color: "#FC8268" }} href="tel:(02) 6076 1196">
                (02) 6076 1196
              </a>
            </FooterLink>
            <FooterLink href="https://corryongnc.org/upper-murray-community-garage/">
              Upper Murray Community Garage
              <a style={{ color: "#FC8268" }} href="tel:(02) 6037 1587">
                (02) 6037 1587
              </a>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Important Links</Heading>
            <FooterLink href="https://www.vic.gov.au/bushfire-recovery-victoria">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Bushfire Recovery</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <h5 style={{ textAlign: "center", color: "white" }}>© 2021 UMCC</h5>
    </Box>
  );
};

export default Footer;