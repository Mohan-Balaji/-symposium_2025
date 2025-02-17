import { useEffect } from "react";
import { useState } from "react";
import './CodeHeist.css'; // Ensure this import is there


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
      <div className="sup-text">CODE HEIST</div>

      <div className="heading">Description :</div>
      <br></br>
      <h2>
        In this exciting coding challenge, participants will be given three
        programming questions that contain logical or syntactical errors. Their
        task is to debug the code and determine the correct output for each
        question. The final outputs will form a password that unlocks a hidden
        file. Inside the file, participants will find an image-based puzzle
        containing a technical word. The first to decipher and submit the correct
        word wins!
      </h2>
      <br></br>

      <div className="heading-container">
        <span className="heading">Number of Players :</span>
        <h2>1</h2>
      </div><br></br>

      <div className="heading-container">
        <span className="heading">Duration :</span>
        <h2>30 mins</h2>
      </div><br></br>

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
        <ul type="square">
          <li>1. Each participant will receive three coding questions containing errors.</li>
          <br></br>
          <li>2. Debug each question to find the correct output.</li>
          <br></br>
          <li>3. Each correct output will serve as a password for a corresponding file (i.e., three outputs = three passwords for three files).</li>
          <br></br>
          <li>4. Open each file using the respective password.</li>
          <br></br>
          <li>5. Each file will contain an image representing part of a technical word.</li>
          <br></br>
          <li>6. Combine the clues from all three images to determine the final technical word.</li>
          <br></br>
          <li>7. Submit your answer. The participant who correctly identifies the word in the shortest time wins. Only one participant per entry.</li>
          
        </ul>
      </h2>
      <br></br>
      <div className="heading-container">
        <span className="heading">Rules :</span></div>
    
    <h2>
      <ul type="square">

       <li>1. Only one participant per entry.</li>
        <br></br>
        <li>2. Participants can use C, Java, Python Language.</li>
        <br></br>
        <li>3. Participant who find the answer first wins</li>
        <br></br>
        <li>4. The entire challenge must be completed within time limit.</li>
      </ul>
    </h2>
    <br></br>
    <div className="heading-container">
        <span className="heading">Contact Us :</span></div>
        <br></br>
        <h2>
          <ol>
            <li>📞 Dharshini (Coordinator) - 7200234813</li>
            <br></br>
              <li>📞 ArulRaj (Co cordinator) - 7904009208</li>

              
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
