import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../styles/home.module.css";


const Contact = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <div style={{ marginBottom: '10px' , marginLeft: "40px", marginRight: "40px" }}> 
      <div className={`${classes.contact}`} style={{ marginLeft: "40px", marginRight: "40px" }}>
        <Container>
          <Row>
            
            <Col lg="10" md="10">
                <br />
                <br />
                
                
                <p> 
                Thank you for taking the time to visit my portfolio. If you have any questions, comments, or would simply like to connect, please don&apos;t hesitate to reach out -

                </p>
                <br />
                
                <p style={{ marginBottom: '10px' , marginLeft: "50px", marginRight: "0px" }}> </p>

                <p className=" d-flex align-items-center gap-2 mb-0" style={{ color: 'mediumaquamarine' }} >
                
           
                <i className="ri-mail-line"></i>vaddi.k@northeastern.edu
                </p>
               
                <div>
                  <ul style={{ listStyleType: 'none', padding: '0' }}></ul>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="https://www.linkedin.com/in/sindhujavaddi/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                     <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                   </li> 
                </div>
                <div style={{ margin: '10px 0' }}>
                <ul style={{ listStyleType: 'none', padding: '0' }}></ul>
                <li style={{ marginBottom: '10px' }}>
                  <a href="https://github.com/SindhVaddi" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                  <i className="fab fa-github"></i> GitHub
                </a>
                </li>
              </div>
                <div>
                  <ul style={{ listStyleType: 'none', padding: '0' }}></ul>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="https://public.tableau.com/app/profile/sindhuja.vaddi" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                    <i className="fas fa-chart-bar"></i> Tableau Public
                     </a>
                  </li>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />                              
            </Col>

          <Col lg="12">
            <div className={`${classes.footer}`}>
              <p>
                &copy; Copyright {year} - Developed by Sindhu Vaddi. All right
                reserved.{" "}
              </p>
            </div>
          </Col> 

          </Row>
        </Container>
      </div>
      </div>
    );
  };
  
  export default Contact;