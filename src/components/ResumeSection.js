const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">May 2023 - Present</div>
                <div className="name">Software Engineer, <br/> Project Mentor, <br/>  Physics Researcher<br/> </div>
                <div className='org'>LIGO Scientific Collaboration,<br/>Georgia Institute of Technology</div>
                <div className="text">
                  <ul>
                    <li>
                      Overhauled major open-source gravitational wave data analysis pipeline in Python, Bash, front-end web languages, 
and C, while expanding the pipeline’s toolkit functionalities to general research users.
                    </li>
                    <li>
                      Coordinated review of a major study’s code and benchmarked analysis results with several LIGO working groups.
                    </li>
                    <li>
                      Created documentation to train graduate students and faculty researchers to continue data analysis.
                    </li>
                    <li>
                      Improved statistical modeling of gravitational wave signals. Short author list publication pending LIGO review process.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="resume-item content-box active">
                <div className="date">May 2021 - May 2023</div>
                <div className="name">Machine Learning Researcher, <br/> Software Engineer, <br/> Physics Researcher </div>
                <div className='org'>LIGO Scientific Collaboration,<br/>Georgia Institute of Technology</div>
                <div className="text">
                  <ul>
                    <li>
                      Constructed decision tree and logistic regression pipelines to classify tabular input data to predict noise glitches in 
the LIGO detectors.
                    </li>
                    <li>
                      Contributed to the development and productionization of convolutional neural network-based machine learning pipelines to both 
classify image data and predict time series signals.
                    </li>
                    <li>
                      Coordinated the Georgia Tech group’s tests of General Relativity. Managed HPC statistical algorithms’ resource allocations on the LIGO computing grid and ensured adherence to 
publication timelines.
                    </li>
                  
                  </ul>
                </div>
              </div>



              <div className="resume-item content-box">
                <div className="date">Aug. 2021 - May 2023</div>
                <div className="name">Project Mentor, <br/>Machine Learning Researcher</div>
                <div className="org">Georgia Tech Center for Research into Novel Computing Hierarchies </div>

                <div className="text">
                  <ul>
                    <li>
                      Led a team of graduate and undergraduate students in developing improved deep reinforcement learning models aimed to minimize noise in current-generation quantum computing devices.
                    </li>
                    <li>
                      Supervised data collection and validated feature engineering of datasets composed of real IBM quantum computing data. 
                    </li>
                    <li>
                      Conducted simulations of quantum computing hardware on remote, dedicated GPU supercomputing hardware.
                    </li>
                  
                  </ul>
                </div>
              </div>
              {/* <div className="resume-item content-box">
                <div className="date">2009 - 2010</div>
                <div className="name">Senior Developer - ABC Inc.</div>
                <div className="text">
                  Optimize your website and apps performance using latest
                  technology.
                </div>
              </div> */}
            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box">
                <div className="date">May 2021 - May 2023</div>
                <div className="name">Georgia Institute of Technology</div>
                <div className="text">
                  B.S. in Physics <br/>GPA: 3.5/4.0
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">August 2019 - May 2021</div>
                <div className="name">Georgia State University </div>
                <div className="text">
                B.S. in Physics <br/>(Transferred) <br/>GPA: 3.8/4.0
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2018</div>
                <div className="name">Georgia Institute of Technology</div>
                <div className="text">Full Stack Web Development Boot Camp </div>
                {/* <div className="org"> </div> */}

                {/* <div className="text">
                  Converted Photoshop layouts to web pages using HTML, CSS, and
                  JavaScript.
                </div> */}
              </div>
              <div className="resume-item content-box">
                <div className="date">August 2015 - December 2017</div>
                <div className="name">The University of Georgia</div>
                <div className="text">B.S. in Physics <br/>(Left School) <br/>GPA: 3.2/4.0 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
