import React, { useState, useEffect } from "react";

function View() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockResumes = [
      {
        id: 1,
        fullName: "Jane Doe",
        email: "jane@example.com",
        skills: "React, Node.js, CSS",
      },
      {
        id: 2,
        fullName: "John Smith",
        email: "john@example.com",
        skills: "Python, Django, SQL",
      },
    ];
    setTimeout(() => {
      setResumes(mockResumes);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-600 py-6">
        Loading Resumes...
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
        Existing Resumes
      </h2>

      {resumes.length === 0 ? (
        <p className="text-center text-gray-500">No resumes found.</p>
      ) : (
        <ul className="space-y-4 ">
          {resumes.map((resume) => (
            <li
              key={resume.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm transition-transform transform hover:scale-103"
            >
              <strong className="text-blue-700 font-medium">
                {resume.fullName}
              </strong>{" "}
              - <span className="text-gray-700">{resume.email}</span>
              <br />
              <span className="text-gray-600">Skills: {resume.skills}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default View;
