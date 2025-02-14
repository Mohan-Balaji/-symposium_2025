import { useState } from "react";
import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite Cloud API endpoint
  .setProject("67ade4e40007694597b2"); // Your Appwrite project ID

const databases = new Databases(client);

export default function RegistrationForm() {
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
        "67ade576002feb5a7f7d", // Database ID
        "67ade58700196af6d8af", // Collection ID
        "unique()",
        {
          name: formData.name,
          college: formData.college,
          whatsapp: formData.whatsapp,
          email: formData.email,
          event: formData.event,
          participation_type: ["1", "2"].includes(formData.event) ? "solo" : formData.participationType,
          team_name: formData.participationType === "team" ? formData.teamName : "",
          team_members: formData.participationType === "team" ?
            (formData.event === "5" ? formData.teamMembers.slice(0, 5).filter(name => name) : formData.teamMembers.slice(0, 4).filter(name => name))
            : [],
        }
      );
      alert("Registration Successful!");
      setFormData({ name: "", college: "", whatsapp: "", email: "", event: "1", participationType: "solo", teamName: "", teamMembers: ["", "", "", "", ""] });
    } catch (error) {
      console.error("Registration Failed:", error);
      alert("Registration Failed! Try Again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-lg rounded-xl bg-white">
      <h2 className="text-xl font-bold mb-4">Student Registration</h2>
      <p className="text-sm text-blue-600 mb-2">Join the WhatsApp group: <a href="your-group-link" className="underline">Click Here</a></p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Student Name" required className="w-full p-2 mb-2 border rounded" />
        <input type="text" name="college" value={formData.college} onChange={handleChange} placeholder="College Name" required className="w-full p-2 mb-2 border rounded" />
        <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" required className="w-full p-2 mb-2 border rounded" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 mb-2 border rounded" />
        
        <label className="block mb-2">Select Event:</label>
        <select name="event" value={formData.event} onChange={handleChange} className="w-full p-2 mb-2 border rounded">
          <option value="1">Event 1</option>
          <option value="2">Event 2</option>
          <option value="3">Event 3 (Team Only)</option>
          <option value="4">Event 4 (Team Only)</option>
          <option value="5">Event 5 (Team Only)</option>
          <option value="6">Event 6 (Team Only)</option>
        </select>
        
        {!["1", "2"].includes(formData.event) && (
          <>
            <label className="block mb-2">Participation Type:</label>
            <select name="participationType" value={formData.participationType} onChange={handleChange} className="w-full p-2 mb-2 border rounded">
              <option value="solo">Solo</option>
              <option value="team">Team</option>
            </select>
          </>
        )}

        {formData.participationType === "team" && ["3", "4", "5", "6"].includes(formData.event) && (
          <>
            <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} placeholder="Team Name" required className="w-full p-2 mb-2 border rounded" />
            {formData.teamMembers.slice(0, formData.event === "5" ? 5 : 4).map((member, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Team Member ${index + 1} Name`}
                value={formData.teamMembers[index] || ""}
                onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                className="w-full p-2 mb-2 border rounded"
                required={index < (formData.event === "5" ? 4 : 3)} // At least 4 for Event 5, 3 for others
              />
            ))}
          </>
        )}
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
}
