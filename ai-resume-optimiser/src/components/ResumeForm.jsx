import React, { useState } from "react";
import "./ResumeForm.css";
const ResumeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    experience: "",
    education: "",
    skills: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-2xl"
    >
      <h2 className="text-xl font-bold mb-4">Resume Details</h2>
      {/*Full Name*/}
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      />
      {/*Email*/}
      <input
        type="email"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      />
      {/*Phone*/}
      <input
        type="text"
        name="phone"
        placeholder="phone"
        value={formData.phone}
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      />
      {/*Linkedin*/}
      <input
        type="text"
        name="linkedin"
        placeholder="Linkedin ID"
        value={formData.linkedin}
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      />

      {/*Exp*/}
      <textarea
        name="experience"
        placeholder="Work Experience"
        value={formData.experience}
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      />
      {/*Edu*/}
      <textarea
        name="Education"
        placeholder="Education"
        value={formData.education}
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      />

      {/*Skills*/}
      <textarea
        name="skills"
        placeholder="Skills (comma separated)"
        value={formData.skills}
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Resume
      </button>
    </form>
  );
};
export default ResumeForm;
