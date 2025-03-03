import React, { useState } from "react"; // adding the useState for form data
import "./care-report.css"; // Import your CSS file
import NavigationBar from "./components/navigationBar.jsx";

const CareReport = () => {

  // for storing form data
  const [formData, setFormData] = useState({
    rName: "", // reporter name
    sName: "", // student name
    residence: "", // on-campus / off-campus
    concerns: "" // concerns
  });

  // input change handler to track user input w/ react state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // run when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    try { // send data to server
      const response = await fetch("http://localhost:3000/submit-care-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      // handle server response
      const data = await response.json();
      console.log("Server Response:", data);

      // show alert if submission was successful/failed
      if (response.ok) {
        alert("Your report has been submitted, thank you for your concern.");
        setFormData({ rName: "", sName: "", residence: "", concerns: "" }); // reset form
      } else {
        alert("Error submitting care report");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit care report.");
    }
  };

  return (
      <>
      <NavigationBar />
    <div className="care-report">
      <h1>Care Report Form</h1>
      <div className="form-container">
        <div className="form-box">
          <div className="form-header"></div>

          <form id="care-report" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="rName">Your Name: </label>
              <input
                type="text"
                id="rName"
                name="rName"
                value={formData.rName}
                onChange={handleChange}
                placeholder="Type here..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="sName">Student's Name: </label>
              <input
                type="text"
                id="sName"
                name="sName"
                value={formData.sName}
                onChange={handleChange}
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
                  name="residence"
                  value="on-campus"
                  onChange={handleChange}
                  required
                />{" "}
                On-Campus
              </label>
              <label>
                <input
                  type="radio"
                  id="off-campus"
                  name="residence"
                  value="off-campus"
                  onChange={handleChange}
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
                value={formData.concerns}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
      </>
  );
};

export default CareReport;