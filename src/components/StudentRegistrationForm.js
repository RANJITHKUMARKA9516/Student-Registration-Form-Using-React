import React ,{useState} from 'react'

const StudentRegistrationForm = () => {
    //Manage the input state
    const [studentName ,setStudentName] = useState("");
    const [age ,setAge] = useState("");
    const [course ,setCourse] = useState("science");
    const [consent ,setConsent] = useState('');
    //Handle change
    const handleNameChange = (e) => { setStudentName(e.target.value); };
    const handleAgeChange = (e) => {setAge(e.target.value);};
    const handleCourseChange = (e) => {setCourse(e.target.value)};
    const handleConsentChange = (e) => {setConsent(e.target.value)};
     //Handle submit
     const handleSubmit = (e) => {
      e.preventDefault();
      console.log(studentName,age,course,consent);
     };
     
  return (
     
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
      
    <form  onSubmit={handleSubmit}>
      <h2>Student Registration Form</h2>
      <div>
        <img src="https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_640.jpg" alt="logo" />
      </div>
      <div>
        <label>Name:</label>
        <input type="text"  value={studentName} onChange={handleNameChange} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number"  value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label>Course:</label>
        <select value={course} onChange={handleCourseChange}>
          <option value="science">Science</option>
          <option value="maths">Maths</option>
          <option value="history">History</option>
        </select>
      </div>
      <div>
        <label>Consent:</label>
        <input type="checkbox" value={consent} onChange={handleConsentChange} />
      </div>
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}

export default StudentRegistrationForm