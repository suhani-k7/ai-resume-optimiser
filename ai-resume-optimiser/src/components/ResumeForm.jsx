import React, { useState } from "react";

const ResumeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    experience: "",
    education: "",
    skills: "",
    github: "",
    jobTitle: "",
    languages: "",
    certifications: "",
    summary: "",
  });

  const[submitted,setSubmitted]=useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");


  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError("");

    try {
      const result = onSubmit ? onSubmit(formData) : null;
      if (result && typeof result.then === "function") {
        await result;
      }
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 1000);
    } catch (err) {
      console.error("submit error:", err);
      setError(err?.message || "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-175 mx-auto bg-white shadow-md p-8 rounded-2xl border border-gray-100 mt-10"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
        Resume Details
      </h2>

      {/* Full Name */}
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="border border-gray-300 w-full p-3 mb-4 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 w-full p-3 mb-4 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />

      {/* Phone */}
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="border border-gray-300 w-full p-3 mb-4 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />

      {/* LinkedIn */}
      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn ID"
        value={formData.linkedin}
        onChange={handleChange}
        className="border border-gray-300 w-full p-3 mb-4 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
      {/* GitHub */}
      <input
        type="text"
        name="github"
        placeholder="GitHub Link"
        value={formData.github}
        onChange={handleChange}
        className="border border-gray-300 w-full p-3 mb-6 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
      {/* Experience */}
      <textarea
        name="experience"
        placeholder="Work Experience"
        value={formData.experience}
        onChange={handleChange}
        className="border border-gray-300 w-full p-3 mb-4 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />

      {/* Education */}
      <textarea
        name="education"
        placeholder="Education"
        value={formData.education}
        onChange={handleChange}
        className="border border-gray-300 w-full p-3 mb-4 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />

      {/* Skills */}
      <textarea
        name="skills"
        placeholder="Skills (Comma Separated)"
        value={formData.skills}
        onChange={handleChange}
        className="border border-gray-300 w-full p-3 mb-6 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
      {/* Job Title */}
      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title / Desired Role"
        value={formData.jobTitle}
        onChange={handleChange}
        className="border border-gray-300 w-full p-3 mb-6 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
      {/* Certifications */}
      <textarea
        name="certifications"
        placeholder="Certifications"
        value={formData.certifications}
        onChange={handleChange}
        className="border border-gray-300 w-full p-3 mb-6 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
      {/* Summary */}
      <textarea
        name="summary"
        placeholder="Professional Summary / Career Objective"
        value={formData.summary}
        onChange={handleChange}
        className="border border-gray-300 w-full p-3 mb-6 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
      {/* Button */}
      <button
        type="submit"
        className="transition-transform transform hover:scale-103 cursor-pointer w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
      >
        Save Resume
      </button>
      {submitted &&(
        <p className="mt-4 text-indigo-600 font-medium text-center">Submitted!</p>
      )}
    </form>
  );
};

export default ResumeForm;
