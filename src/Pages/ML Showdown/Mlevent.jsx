import { useEffect } from "react";
import { useState } from "react";
import "./Mlevent.css";

function CodeHeist() {
  useEffect(() => {
    document.body.style.height = "200vh"; // Forces scrolling
    document.body.style.overflowY = "scroll";
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150); // Reset after 150ms
    alert("You have registered successfully!");
  };


  return (
    <div className="wrapper">
    <div className="title-card1">
      <br></br>
      <div className="sup-text">ML Showdown: Code, Compete, Conquer!</div>
      <br></br>
      <br></br>
      <div className="heading">Description :</div>
      <br></br>
      <h2>
      In this high-stakes Machine Learning challenge, teams will be provided with a dataset and must develop a model to achieve the highest accuracy. But that’s not all along the way, a rapid-fire quiz will test participants’ ML knowledge, offering bonus points that can make all the difference. The quiz will be conducted in between the challenges. The team with the highest combined score wins!
      </h2>
      <br></br>
      <div className="heading-container">
        <span className="heading">Number of Players :</span>
        <h2>Each team must have 2 to 3 members</h2>
      </div>
    <br></br>
      <div className="heading-container">
        <span className="heading">Duration :</span>
        <h2>1 hour (45 minutes for model building + 15 minutes for the rapid-fire quiz).</h2>
      </div>
      <br></br>
      <div className="heading-container">
        <span className="heading">Cash prize :</span>
        <h2>First Prize - 1500</h2>
        <h2>Second Prize - 1000</h2>
      </div>
      <br></br>
      <div className="heading-container">
      <div className="heading">How to Play :</div></div>
      <br></br>
      <h2>
        <ol>
          <li>1.	Teams will receive a dataset and must build a Machine Learning model to achieve the best accuracy.</li>
          <br></br>
          <li>2.	The challenge includes a rapid-fire quiz with ML-related questions.</li>
          <br></br>
          <li>3.	Correct quiz answers will earn bonus points, giving teams an edge.</li>
          <br></br>
          <li>4.	At the end of the challenge, model accuracy and quiz performance will determine the winners.</li>
          <br></br>
          
          
        </ol>
      </h2>

      <div className="heading-container">
        <span className="heading">Rules :</span></div>
        <br></br>
    
    <h2>
      <ol>

       <li>1. Teams must consist of 2 to 3 members.</li>
        <br></br>
        <li>2. Any programming language or ML framework can be used.</li>
        <br></br>
        <li>3. The challenge must be completed within the given time limit.</li>
        <br></br>
        <li>4. No copying of the code is allowed</li>
        <br></br>
        <li>5. The team co-ordinators will decide the final results.</li>
      </ol>
    </h2>
    <br></br>

    <div className="heading-container">
    <span className="heading">Scoring : </span></div>
    <br></br>
    <h2>
      <ol>
        <li>1. Model Accuracy: 70% of the total score.</li>
        <br></br>
        <li>2. Quiz Performance: 30% of the total score.</li>
        <br></br>
        <li>3. The team with the highest combined score (accuracy + quiz points) wins.</li>
      </ol>
    </h2>
    <br></br>
    <div className="heading-container">
        <span className="heading">Contact Us :</span></div>
        <br></br>
        <h2>
          <ol>
            <li>📞 Jayasri (Coordinator) - 6380085033</li>
            <br></br>
              <li>📞 Kabilesh (Co cordinator) - 9176782009</li>

              
      </ol>
      </h2>
      
      </div>
      <div className="register-btn-container">
    <button className="register-btn">Register Now</button>
  </div>
    
    </div>

    
    
  );
}

export default CodeHeist;
