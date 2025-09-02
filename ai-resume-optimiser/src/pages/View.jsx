import React from "react";
function View(){
    const [resumes, setResumes]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        const mockResumes=[
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
    setTimeout(()=>{
        setResumes(mockResumes);
        setLoading(false);
    }, 1000);
    },[]);

    if (loading) return <div>Loading Resumes...</div>
    return(
        <div>
            <h2>Existing Resumes</h2>
            {resumes.length===0 ? (
                <p>No resumes found.</p>
            ):(
                <ul>
                    {resumes.map((resume)=>(
                        <li key={resume.id}>
                            <strong>{resume.fullName}</strong> - {resume.email}
                            <br/>
                            Skills: {resume.skills}
                        </li>
                    ))}
                </ul>
            )}
        </div>
)};
export default View;