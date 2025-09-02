import React from "react";
import ResumeForm from '../components/ResumeForm';

function AddResume(props){
    return(
        <div>
            <ResumeForm {...props} />
        </div>
    );
}
export default AddResume;