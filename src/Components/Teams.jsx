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
                  {/* <a href={member.linkedin} style={styles.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> */}

                  {/* Added Button */}
                  <button
                    className="group hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6"
                  >
                    <svg
                      className="w-8 h-8 fill-neutral-50"
                      height="100"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 100 100"
                      width="100"
                      x="0"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0"
                    >
                      <path
                        d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
                      ></path>
                    </svg>
                    <span className="border-l-2 px-1">{member.name}</span>
                    <div
                      className="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute"
                    >
                      See my profile!
                    </div>
                  </button>
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

export default TeamPage;
