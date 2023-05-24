
import React from "react";
import { Container, Row, Col } from "reactstrap";

import classes from "../styles/home.module.css";

const Projects = () => {
    return (
      <div style={{ marginTop: '40px' , marginLeft: "40px", marginRight: "40px" }}> 
      <div className={`${classes.contact}`} style={{ marginLeft: "40px", marginRight: "40px" }}>
      <Container>
          <Row>
            
            <Col lg="10" md="10">
                <h9>Data Engineering Projects (ETL, Data Integration, Analysis, Cleaning, BI): </h9>

                <br />
                <br />

                <div style={{ margin: '10px 0' }}>
                <p>
                  <a href="https://github.com/SindhVaddi" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                  <i className="fab fa-github"></i> 1. Iowa Liquor Sales Data Analysis</a>: [ER Studio, Talend, Alteryx, SQL Server, Tableau, Power BI]
                </p>
                             
                <p>• Structured the dimensional model to load 24 million records of Iowa Liquor Sales data </p>
                <p>• Performed data load with multiple sources and data cleaning using tMap, tReplace, tAggregateRow, and triggers on Talend </p>
                <p>• Generated over 50 reports and dashboards showcasing visualization of various KPIs using Tableau and Power BI </p>
                </div>

                <br />

                <div style={{ margin: '10px 0' }}>
                <p>
                  <a href="https://github.com/SindhVaddi" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                  <i className="fab fa-github"></i> 2. Analysis of New York, Dallas, and Chicago Food Inspection </a>: [Alteryx, SQL Server, Tableau, Power BI]
                </p>
                             
                <p>• Designed dimensional models to create 6 Fact and 20-dimensional tables respective to New York, Dallas, and Chicago 
                </p>
                <p>• Executed profiling, transformations using regular expressions and parsing, and Cleaning on Alteryx               
                </p>
                <p>• Created 100+ reports and dashboards using Tableau and Power BI to highlight inspections, violations, and severity over time
                </p>
                </div>
                
                <br />

                <div style={{ margin: '10px 0' }}>
                <p> 
                  <a href="https://github.com/SindhVaddi/NYC-Motor-Vehicle-Collision_Data-Analysis" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                  <i className="fab fa-github"></i> 3. NYC Motor Vehicle Collision Analysis </a>: [Alteryx, Talend, SQL Server, Tableau, Power BI]
                </p>
                             
                <p>• Designed dimensional models to create 6 Fact and 20-dimensional tables respective to New York, Dallas, and Chicago 
                </p>
                <p>• Executed profiling, transformations using regular expressions and parsing, and Cleaning on Alteryx               
                </p>
                <p>• Created 100+ reports and dashboards using Tableau and Power BI to highlight inspections, violations, and severity over time
                </p>
                </div> 
                    
                <br />

                <div style={{ margin: '10px 0' }}>
                <p> 
                  <a href="https://github.com/SindhVaddi/NYC-Motor-Vehicle-Collision_Data-Analysis" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                  <i className="fab fa-github"></i> 4. Data Analysis of US Accidents (2016 - 2021) </a>: [Python, Tableau]
                </p>
                             
                <p>• Conducted data profiling, cleansing, and wrangling operations using Python on a large dataset, &quot;US Accidents (2016-2021),&quot; containing over 2.5 million rows
                </p>
                <p>• Employed visualization techniques to uncover patterns, trends, and outliers in the data through the creation of detailed reports and dashboards using Tableau
                </p>
                </div>
                 
                <br />

                <div style={{ margin: '10px 0' }}>
                <p> 
                  <a href="https://github.com/SindhVaddi/SDN-Intrusion-Detection-Analsis" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                  <i className="fab fa-github"></i> 5. SDN Intrusion Detection Data Analysis </a>: [Neo4j, Python (Pandas, Matplotlib, Seaborn)]

                </p>
                             
                <p>• Detected more than 344,000 instances of malicious attacks in the SDN Intrusion Detection data
                </p>
                <p>• Devised nodes and relationships to represent 1 million rows of data, enabling comprehensive reporting and BI analysis to showcase various attack types and their distinctive characteristics
                </p>
                </div>

                <br />
                <br />
                <br />

                <h9>Data Visualizations:  </h9>

                <div style={{ margin: '10px 0' }}>
                <p> 
                &quot;The goal is to turn data into information, and information into insight.&quot; - Carly Fiorina

                </p>
                <iframe 
                src="https://public.tableau.com/app/profile/sindhuja.vaddi" 
                title="Tableau Dashboard" 
                width="800" 
                height="600"
                />

                </div> 

                <br />
                <br />
                <br />
             
                <h9>Web Development:  </h9>
 
                <div style={{ margin: '10px 0' }}>
                <p>
                  <a href="https://github.com/SindhVaddi" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                  <i className="fab fa-github"></i> This Website </a>: [React, HTML, CSS] 
                </p>
                            
                </div> 

            
            </Col>
          </Row>
        </Container>
      </div>
      </div>
    );
  };
  



export default Projects;
