import React,{useState} from "react";

export default function About() {
  const[mystyle,setMyStyle] =useState({
    color: "black",
    backgroundColor: "white",
  })

  const[btntext,setBtnText]=useState("Enable Dark Mode")
  const toggleStyle=() => {
    if (mystyle.color==="black"){
        setMyStyle({color:'white',backgroundColor:'black'})
        setBtnText("Enable Light Mode")
        document.body.style.backgroundColor="black"
    }
    else{
        setMyStyle({color:'black',backgroundColor:'white'})
        setBtnText("Enable Dark Mode")
          document.body.style.backgroundColor="white"
    }
  }
  return (
    <div className="container my-5" style={mystyle}>
      <h1 className="text-center">About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne" style={mystyle}
            >
              Overview
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong> TextUtils is a web application that allows you to analyze and manipulate text. 
        You can perform various operations like converting text to uppercase, lowercase, 
        and much more!
        
        Whether you're a writer, student, or just someone who works with text often, 
        TextUtils provides the tools you need to make your text processing easier.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
             Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <p><ul>
        <li><strong>Text Transformation:</strong> Easily convert text to uppercase, lowercase, or capitalize each word.</li>
        <li><strong>Word Count:</strong> Get an accurate count of words, characters, and sentences in your text.</li>
        <li><strong>Remove Extra Space:</strong> Remove unnecessary spaces, punctuation, and formatting to ensure your text is clean and ready for use.</li>
        <li><strong>Text Cleaning:</strong> Analyze the readability of your text to ensure it’s suitable for your target audience.</li>
        <li><strong>Count Reading Speed:</strong> Enjoy a user-friendly interface with light and dark modes, allowing for a personalized experience.</li>
      </ul></p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              Who can use TextUtils?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            <p>
        TextUtils is ideal for anyone who deals with text regularly, including:
      </p>
      <ul>
        <li><strong>Students:</strong> Enhance your writing skills and ensure your assignments are polished and error-free.</li>
        <li><strong>Writers:</strong> Perfect your drafts and improve your content’s readability and impact.</li>
        <li><strong>Professionals:</strong> Streamline your work with quick text manipulation for reports, emails, and presentations.</li>
      </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              How to get started?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            
      <p>
        Getting started with TextUtils is easy! Simply navigate to the home page, enter your text into the input field, 
        and choose from a variety of options to analyze and transform your text. 
        No installation is required—TextUtils is available online and accessible from any device.
      </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button type="button" class="btn btn-primary my-4" onClick={
            toggleStyle
        }>
          {btntext}
        </button>
      </div>
    </div>
  );
}
