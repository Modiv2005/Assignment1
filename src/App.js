import { useState } from 'react'
import './App.css'

function App(){

const [data,setData]=useState({

name:"",
email:"",
phone:"",
summary:"",
objective:"",
education:"",
academicSkills:"",
nonAcademicSkills:"",
experience:"",
achievements:""

})

function handleChange(e){

setData({

...data,
[e.target.name]:e.target.value

})

}

function downloadDoc(){

const content = `
STUDENT RESUME

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

PROFESSIONAL SUMMARY
${data.summary}

CAREER OBJECTIVE
${data.objective}

EDUCATION
${data.education}

ACADEMIC SKILLS
${data.academicSkills}

NON ACADEMIC SKILLS
${data.nonAcademicSkills}

EXPERIENCE AND INTERNSHIPS
${data.experience}

SKILLS AND ACHIEVEMENTS
${data.achievements}
`

const blob = new Blob([content],{type:'application/msword'})

const url = window.URL.createObjectURL(blob)

const link = document.createElement('a')

link.href=url

link.download="resume.doc"

link.click()

}

return(

<div className="container">

<h1>Student Resume Builder</h1>

<div className="layout">

<div className="form">

<input
name="name"
placeholder="Enter Name"
onChange={handleChange}
/>

<input
name="email"
placeholder="Enter Email"
onChange={handleChange}
/>

<input
name="phone"
placeholder="Enter Phone"
onChange={handleChange}
/>

<textarea
name="summary"
placeholder="Professional Summary"
onChange={handleChange}
/>

<textarea
name="objective"
placeholder="Career Objective"
onChange={handleChange}
/>

<textarea
name="education"
placeholder="Education"
onChange={handleChange}
/>

<textarea
name="academicSkills"
placeholder="Academic Skills"
onChange={handleChange}
/>

<textarea
name="nonAcademicSkills"
placeholder="Non Academic Skills"
onChange={handleChange}
/>

<textarea
name="experience"
placeholder="Experience and Internships"
onChange={handleChange}
/>

<textarea
name="achievements"
placeholder="Skills and Achievements"
onChange={handleChange}
/>

<button onClick={downloadDoc}>
Download Resume (.doc)
</button>

</div>

<div className="resume">

<h2>Resume Preview</h2>

<h3>{data.name}</h3>

<p>{data.email}</p>

<p>{data.phone}</p>

<h4>Professional Summary</h4>
<p>{data.summary}</p>

<h4>Career Objective</h4>
<p>{data.objective}</p>

<h4>Education</h4>
<p>{data.education}</p>

<h4>Academic Skills</h4>
<p>{data.academicSkills}</p>

<h4>Non Academic Skills</h4>
<p>{data.nonAcademicSkills}</p>

<h4>Experience and Internships</h4>
<p>{data.experience}</p>

<h4>Skills and Achievements</h4>
<p>{data.achievements}</p>

</div>

</div>

</div>

)

}

export default App