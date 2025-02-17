import React from "react";
import Background from "./Background/Background";

const teamData = [
  { name: "Mohan", role: "Frontend Developer", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg", linkedin: "https://linkedin.com/in/alice" },
  { name: "Loga", role: "Backend Developer", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg", linkedin: "https://linkedin.com/in/bob" },
  { name: "Sai", role: "UI/UX Designer", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg", linkedin: "https://linkedin.com/in/charlie" },
  { name: "Arul", role: "Database Engineer", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg", linkedin: "https://linkedin.com/in/david" },
  { name: "Bharath", role: "Frontend Engineer", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg", linkedin: "https://linkedin.com/in/emma" },
  { name: "Janani", role: "QA Tester", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg", linkedin: "https://linkedin.com/in/frank" },
  { name: "Dharshini", role: "Project Manager", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg", linkedin: "https://linkedin.com/in/grace" },
  { name: "Sai Shri", role: "Deployment Engineer", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg", linkedin: "https://linkedin.com/in/hank" },
];

const TeamPage = () => {
    return (
        <div style={styles.backgroundContainer}>
          <Background />
          <div style={styles.container}>
            <h2 style={styles.heading}>Meet Our Development Team</h2>
            <div style={styles.grid}>
              {teamData.map((member, index) => (
                <div key={index} style={styles.card} className="team-card">
                  <img src={member.image} alt={member.name} style={styles.image} />
                  <h3 style={styles.name}>{member.name}</h3>
                  <p style={styles.role}>{member.role}</p>
                  <a href={member.linkedin} style={styles.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

const styles = {
  backgroundContainer: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflowX: "hidden", // Prevents horizontal scrolling but allows vertical scrolling
  },
  container: {
    textAlign: "center",
    padding: "40px",
    position: "relative",
    zIndex: 1,
  },
  heading: {
    color: "white",
    fontSize: "28px",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "40px",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1000px",
    margin: "0 auto",
    paddingBottom: "50px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    transition: "transform 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
  },
  role: {
    fontSize: "14px",
    color: "yellow",
  },
  linkedin: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 12px",
    background: "#0077b5",
    color: "white",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default TeamPage;
