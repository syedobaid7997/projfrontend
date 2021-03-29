import React from 'react';
import "../styles.css";
import Menu from "./Menu";

const Base = ({
    title="My Title",
    description="My description",
    className = "text-white p-4",  //bg-dark
    children
}) => (
  
      <div>
          <Menu />
          <div className="container-fluid">
            <div className="jumbotron text-white text-center">  {/* bg-dark */}
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>  
            </div>
            <div className={className}>{children}</div>
          </div>
          <footer className="footer mt-auto py-3 my-10"> {/* bg-dark */}
              <div className="container-fluid bg-success text-white text-center py-3">
                  <h4>If you got any questions, feel free to reach out !</h4>
                  <button className="btn btn-warning btn-lg">Contact Us</button>
              </div>
              <div className="container">
                  <span className="text-muted">
                      An Amazing <span className="text-white">MERN</span> bootcamp
                  </span>
              </div>
          </footer>
      </div>
)

export default Base;
