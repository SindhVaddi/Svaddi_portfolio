import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import homeimg from "../../public/images/home.jpg";
import classes from "../../styles/home.module.css";



const Home = () => {
  const date = new Date();
  const year = date.getFullYear();
    return (
      <div style={{ marginBottom: '10px' , marginLeft: "40px", marginRight: "40px" }}> 
      <section className={`${classes.home}`}>
        <Container>
          <Row>
            {/* ========== home content ============= */}
            <Col lg="6" md="6">
              <div className={`${classes.home__content}`}>
                
                <p style={{ color: 'mediumaquamarine' }} > — Hello, it&apos;s nice to meet you :) </p>
                
                <h9>I&apos;m Sindhu Vaddi, a Data Analyst with a specialization in Business Intelligence</h9>
                <p> </p>
                <p>
                Throughout my life,  I have desired to accomplish something that would benefit the world. As my journey unfolds, I am convinced that I am on the right track. Equipped with a Bachelor's degree in Computer Science Engineering and two years of experience as a data analyst, I embarked on a journey to pursue a Master's degree in Data Architecture and Management from Northeastern University, which has brought significant personal and professional growth. My passion for the intricate art of data analytics, business intelligence, and visual representation runs deep, and with every passing day, I continue to be fascinated by the data in the world and learn something new from it every day. </p>
                <p>
                When I am not endeavoring to make a difference in the world through data analysis, I enjoy trading in the stock market, hiking, working out at the gym, and recently, discovered a fondness for cooking. As an avid traveler, I revel in exploring new destinations and immersing myself in different cultures. </p>
                
                <br />
                <br />
                
                <p className=" d-flex align-items-center gap-2 mb-0" style={{ color: 'mediumaquamarine' }} >
                {" "}
                Please feel free to reach out to me at: 
                <i className="ri-mail-line"></i>vaddi.k@northeastern.edu
                </p>
              <br />
              <br />
              <br />
              <br />
              <br />
            
                
                
              </div>
            </Col>
         
            {/* ========== home img ============= */}
            <Col lg="5" md="5">
              
              <br />
              <div className={`${classes.home__img} text-end`}>
                <Image alt="home-image" src={homeimg} width="450" height="350" />

              </div>
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
      </section>
      </div>
    );
  };
  
  export default Home;