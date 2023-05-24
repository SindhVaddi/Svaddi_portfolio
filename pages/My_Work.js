
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
                <h4>Data Engineering Projects (ETL, Data Integration, Analysis, Cleaning, BI): </h4>

                <br />
                <br />

                <div style={{ margin: '10px 0' }}>
                <p>
                  <a href="https://github.com/SindhVaddi/Iowa-Liquor-Sales-Analysis" target="_blank" rel="noopener noreferrer" style={{color: 'mediumaquamarine'}}>
                  <i className="fab fa-github"></i> Iowa Liquor Sales Data Analysis</a>: [ER Studio, Talend, Alteryx, SQL Server, Tableau, Power BI]
                </p>
                             
                <p>• Crafted an intricate and efficient dimensional model, seamlessly handling a vast volume of 24 million records from Iowa Liquor Sales data </p>
                <p>• Orchestrated the data load process with finesse, leveraging the prowess of Talend, Alteryx, and SQL Server. Employed advanced techniques such as tMap, tReplace, tAggregateRow, and triggers on Talend to ensure clean and accurate data </p>
                <p>• Transformed complex data into captivating visualizations, showcasing over 50 meticulously crafted reports and dynamic dashboards using Tableau and Power BI to showcase essential KPIs </p>
                </div>

                <br />

                <div style={{ margin: '10px 0' }}>
                <p>
                  <a href="https://github.com/SindhVaddi" target="_blank" rel="noopener noreferrer" style={{color: 'mediumaquamarine'}}>
                  <i className="fab fa-github"></i> Analysis of New York, Dallas, and Chicago Food Inspection </a>: [Alteryx, SQL Server, Tableau, Power BI]
                </p>
                             
                <p>• Developed comprehensive dimensional models to establish 6 fact tables and 20 dimensional tables specifically tailored to New York, Dallas, and Chicago
                </p>
                <p>• Utilized Alteryx to execute data profiling, transformations employing regular expressions and parsing techniques, and data-cleaning operations
                </p>
                <p>• Created an extensive collection of 100+ reports and dashboards using Tableau and Power BI to highlight inspections, violations, and severity over time
                </p>
                </div>
                
                <br />

                <div style={{ margin: '10px 0' }}>
                <p> 
                  <a href="https://github.com/SindhVaddi/NYC-Motor-Vehicle-Collision_Data-Analysis" target="_blank" rel="noopener noreferrer" style={{color: 'mediumaquamarine'}}>
                  <i className="fab fa-github"></i> NYC Motor Vehicle Collision Analysis </a>: [Alteryx, Talend, SQL Server, Tableau, Power BI]
                </p>
                             
                <p>• Developed comprehensive dimensional models to create 7 fact tables and 26 dimensional tables, tailored specifically to store and analyze 1.99 million rows of NYC Motor Vehicle Collision data
                </p>
                <p>• Utilized Alteryx to execute data profiling on three source files obtained from Google BigQuery and TSV files and stored them in staging tables for further processing
                </p>
                <p>• Implemented error tables in Talend to effectively identify anomalies and cleanse the data, ensuring high data quality and accuracy
                </p>
                <p>• Performed data loading from multiple sources and conducted data cleaning operations using various components in Talend, such as tMap, tReplace, tUniqRow, tSplitRow, and tUnpivotRow
                </p>
                <p>• Created an extensive collection of over 70 reports and dashboards using Tableau and Power BI to visualize the analysis of metrics, time series, collision patterns, and fatal incidents, providing valuable insights into the dataset
                </p>
                </div> 
                    
                <br />

                <div style={{ margin: '10px 0' }}>
                <p> 
                  <a href="https://public.tableau.com/app/profile/sindhuja.vaddi/viz/USAccidents2016-2021DataAnalysis/USAccidents2016-2021Dashboards" target="_blank" rel="noopener noreferrer" style={{color: 'mediumaquamarine'}}>
                  <i className="fab fa-github"></i> Data Analysis of US Accidents (2016 - 2021) </a>: [Python, Tableau]
                </p>
                             
                <p>• Utilized Python to perform data profiling, cleansing, and wrangling tasks on a substantial dataset titled "US Accidents (2016-2021)," encompassing more than 2.5 million rows

                </p>
                <p>• Leveraged Tableau to employ advanced visualization techniques, generating comprehensive reports and interactive dashboards that effectively revealed data patterns, trends, and outliers
                </p>
                </div>
                 
                <br />

                <div style={{ margin: '10px 0' }}>
                <p> 
                  <a href="https://github.com/SindhVaddi/SDN-Intrusion-Detection-Analsis" target="_blank" rel="noopener noreferrer" style={{color: 'mediumaquamarine'}}>
                  <i className="fab fa-github"></i> SDN Intrusion Detection Data Analysis </a>: [Neo4j, Python (Pandas, Matplotlib, Seaborn)]

                </p>
                             
                <p>• Identified more than 344,000 instances of malicious attacks in the SDN Intrusion Detection data
                </p>
                <p>• Devised a robust data model comprising nodes and relationships to accurately represent and analyze 1 million rows of data, enabling comprehensive reporting and BI analysis to showcase various attack types and their distinctive characteristics
                </p>
                </div>

                <br />
                <br />
                <br />

                <h4>Data Visualizations:  </h4>

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
             
                <h4>Web Development:  </h4>
 
                <div style={{ margin: '10px 0' }}>
                <p>
                  <a href="https://github.com/SindhVaddi/Svaddi_portfolio" target="_blank" rel="noopener noreferrer" style={{color: 'mediumaquamarine'}}>
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
