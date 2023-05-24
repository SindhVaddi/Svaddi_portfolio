import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import homeimg from "../../public/images/home.jpg";
import classes from "../../styles/home.module.css";



const Home = () => {
    return (
      <div style={{ marginBottom: '10px' , marginLeft: "40px", marginRight: "40px" }}> 
      <section className={`${classes.hero}`}>
        <Container>
          <Row>
            {/* ========== hero content ============= */}
            <Col lg="6" md="6">
              <div className={`${classes.hero__content}`}>
                
                <p style={{ color: 'mediumaquamarine' }} > — Hello, it&apos;s nice to meet you :) </p>
                
                <h9>I&apos;m Sindhu Vaddi, a Data Analyst with a specialization in Business Intelligence</h9>
                <p> </p>
                <p>
                Throughout my life, I have harbored a strong desire to make a positive impact on the world. As my journey unfolds, I am convinced that I am on the right track. Equipped with a Bachelor&apos;s degree in Computer Science Engineering and two years of experience as a data analyst, I embarked on a journey to pursue a Master&apos;s degree in Data Architecture and Management from Northeastern University, which has brought significant personal and professional growth. My passion for the intricate art of data analytics, business intelligence, and visual representation runs deep, and with every passing day, I find myself diving even further into this fascinating realm of knowledge. </p>
                <p>
                In my leisure time, I engage in a variety of activities, including trading in the stock market, reading, hiking, working out at the gym, and recently, discovered a fondness for cooking. As an  avid traveler, I revel in exploring new destinations and immersing myself in different cultures. </p>
                
                <br />
                <br />
                
                <p className=" d-flex align-items-center gap-2 mb-0" style={{ color: 'mediumaquamarine' }} >
                {" "}
                Please feel free to reach out to me at: 
                <i className="ri-mail-line"></i>vaddi.k@northeastern.edu
                </p>
                
                
              </div>
            </Col>
         
            {/* ========== hero img ============= */}
            <Col lg="5" md="5">
              <p> </p>
              
              <div className={`${classes.home__img} text-end`}>
                <Image alt="home-image" src={homeimg} width="450" height="350" />

              </div>
            </Col>
          </Row>
        </Container>        
      </section>
      </div>
    );
  };
  
  export default Home;