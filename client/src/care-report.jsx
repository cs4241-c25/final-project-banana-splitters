import React from "react";
import "./care-report.css"; // Import your CSS file

const CareReport = () => {
  return (
    <div className="care-report">
      <h1>Care Report Form</h1>
      <div className="form-container">
        <div className="form-box">
          <div className="form-header"></div>
          <form id="care-report">
            <div className="form-group">
              <label htmlFor="rStudent">Your Name:</label>
              <input
                type="text"
                id="rStudent"
                name="Reporter"
                placeholder="Type here..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cStudent">Student's Name:</label>
              <input
                type="text"
                id="cStudent"
                name="Client"
                placeholder="Type here..."
                required
              />
            </div>

            <div className="form-group">
              <label>Does this student live on-campus or off-campus?</label>
            </div>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  id="on-campus"
                  name="location"
                  value="on-campus"
                  required
                />{" "}
                On-Campus
              </label>
              <label>
                <input
                  type="radio"
                  id="off-campus"
                  name="location"
                  value="off-campus"
                  required
                />{" "}
                Off-Campus
              </label>
            </div>

            <div className="form-group">
              <label>Tell us about your concerns:</label>
            </div>

            <div className="concerns-group">
              <textarea
                id="concerns"
                name="concerns"
                placeholder="Type here..."
                rows="4"
                cols="50"
                required
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareReport;