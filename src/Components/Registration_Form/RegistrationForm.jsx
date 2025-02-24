import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Client, Databases } from "appwrite";
import Background from "../Background/Background";

const client = new Client()
  .setEndpoint("YOURS_END_POINT")
  .setProject("YOURS_END_POINT_KEY");

const databases = new Databases(client);

export default function RegistrationForm() {
  const navigate = useNavigate(); // Initialize navigate for redirection

  const [formData, setFormData] = useState({
    name: "",
    college: "",
    whatsapp: "",
    email: "",
    event: "1",
    participationType: "solo",
    teamName: "",
    teamMembers: ["", "", "", "", ""],
  });

 const eventNames = {
  "1": "Code Heist",
  "2": "Codetastic",
  "3": "DesignX",
  "4": "ML Showdown",
  "5": "VALORANT",
  "6": "GAMEO 2.0",
};

  const whatsappLinks = {
    "1": "GROUP1_LINK",
    "2": "GROUP2_LINK",
    "3": "GROUP3_LINK",
    "4": "GROUP4_LINK",
    "5": "GROUP5_LINK",
    "6": "GROUP6_LINK",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTeamMemberChange = (index, value) => {
    const updatedTeamMembers = [...formData.teamMembers];
    updatedTeamMembers[index] = value;
    setFormData({ ...formData, teamMembers: updatedTeamMembers });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await databases.createDocument(
        "YOURS_END_POINT_KEY",
        "YOURS_END_POINT_KEY",
        "unique()",
        {
          name: formData.name,
          college: formData.college,
          whatsapp: formData.whatsapp,
          email: formData.email,
          event: eventNames[formData.event],
          participation_type: ["1", "2"].includes(formData.event) ? "solo" : formData.participationType,
          team_name: formData.participationType === "team" ? formData.teamName : "",
          team_members: formData.participationType === "team"
            ? (formData.event === "5"
                ? formData.teamMembers.slice(0, 5).filter(name => name)
                : formData.teamMembers.slice(0, 4).filter(name => name))
            : [],
        }
      );
      alert("Registration Successful!");
      setFormData({
        name: "",
        college: "",
        whatsapp: "",
        email: "",
        event: "1",
        participationType: "solo",
        teamName: "",
        teamMembers: ["", "", "", "", ""],
      });
      navigate(`/success?event=${formData.event}`); // Redirect after successful registration
    } catch (error) {
      console.error("Registration Failed:", error);
      alert("Registration Failed! Try Again.");
    }
  };

  return (
    <div className="w-full h-screen overflow-y-auto z-10 relative">
      <Background />

      <div className="flex flex-col items-center justify-center min-h-screen w-full z-10 relative mx-auto px-12 py-20 pb-44 space-y-12">
        <div
          className="min-h-screen font-[remaining] text-3xl flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/mnt/data/image.png')" }}
        >
          <div className="max-w-md w-full p-6 bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl border border-white/20">
          <h2 className="text-white text-7xl mb-4 text-center ">event registration</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Student Name" required className="w-full p-2 mb-2 border rounded bg-white/20 text-white placeholder-white" />
              <input type="text" name="college" value={formData.college} onChange={handleChange} placeholder="College Name" required className="w-full p-2 mb-2 border rounded bg-white/20 text-white placeholder-white" />
              <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" required className="w-full p-2 mb-2 border rounded bg-white/20 text-white placeholder-white" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 mb-2 border rounded bg-white/20 text-white placeholder-white" />

              <label className="block mb-2 text-white">
                Join Event WhatsApp Group Link:
                {formData.event && (
                  <p className="text-3xl text-emerald-300 mb-2 text-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="30" height="30" className="inline-block py-3" /> 
                    Join the <strong>{eventNames[formData.event]}</strong> WhatsApp group:  
                    <a href={whatsappLinks[formData.event]} target="_blank" rel="noopener noreferrer" className="underline ml-1">Click Here</a>
                  </p>
                )}
              </label>

              <p className="text-white">Select Event</p>
              <select name="event" value={formData.event} onChange={handleChange} className="w-full p-2 mb-2 border rounded bg-white/20 text-black">
                {Object.entries(eventNames).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>

              {!["1", "2"].includes(formData.event) && (
                <>
                  <label className="block mb-2 text-white">Participation Type:</label>
                  <select name="participationType" value={formData.participationType} onChange={handleChange} className="w-full p-2 mb-2 border rounded bg-white/20 text-black">
                    <option value="solo">Solo</option>
                    <option value="team">Team</option>
                  </select>
                </>
              )}

              {formData.participationType === "team" && ["3", "4", "5", "6"].includes(formData.event) && (
                <>
                  <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} placeholder="Team Name" required className="w-full p-2 mb-2 border rounded bg-white/20 text-white placeholder-white" />
                  {formData.teamMembers.slice(0, formData.event === "5" ? 5 : 4).map((member, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder={`Team Member ${index + 1} Name`}
                      value={formData.teamMembers[index] || ""}
                      onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                      className="w-full p-2 mb-2 border rounded bg-white/20 text-white placeholder-white"
                      required={index < (formData.event === "5" ? 4 : 3)}
                    />
                  ))}
                </>
              )}
              
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
