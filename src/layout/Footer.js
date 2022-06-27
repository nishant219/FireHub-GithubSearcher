import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faBlackberry, faBots, faDev, faLine, faSkype}  from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <Container
    fluid tag="footer"
    className="text-center text-white text-uppercase fixed-bottom p-1"
    style={{backgroundColor: '#00C853'}}
    >

            <p> Hi buddy :)    This is the FireHub -: GitHub searcher with Firebase Auth</p>
      <h2>
        <li>
          <a
            href="https://portfolio2022june.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
<FontAwesomeIcon icon={faDev} color="#4d4d4e" />
           </a>
        </li> </h2>
    
    </Container>
  );
};

export default Footer;
