const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/smiley_headshot_regSize.JPG" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
          Software engineer with 5+ years of DevOps, MLOps, machine learning engineering, and full-stack software 
engineering experience in both industrial and academic settings. Computational Physicist leading PhD-level research in the field of gravitational wave astronomy. Data analysis 
coordinator, project mentor, and co-author on collaboration papers with 350+ citations and 1500+ authors from 
around the globe.
          </p>
          <div className="info-list">
            <ul>
              {/* <li>
                <strong>Age:</strong> 24
              </li> */}
              <li>
                <strong>Residence:</strong> Atlanta, GA
              </li><br/><br/>
              {/* <li>
                <strong>Freelance:</strong> Available
              </li> */}
              {/* <li>
                <strong>Address:</strong> San Francisco
              </li> */}
              <li>
                <strong>Phone:</strong> +1 404 375 7101
              </li>
              <li>
                <strong>E-mail:</strong> jsull920@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn hover-animated">
              <span className="circle" />
              {/* change to link here */}
              <span className="lnk">Download Resume</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
