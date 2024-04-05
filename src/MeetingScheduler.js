import React, { useState } from 'react';
import data from './data/data.json';
import './MeetingScheduler.css'

function MeetingScheduler() {
  const [userName, setUserName] = useState('');
  const[useremail,setEmail]=useState('');
  const [meetingSlot, setMeetingSlot] = useState('');
  const [Interviewer,setInterviewer]=useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const searchMeetingTime = () => {
    const user = data.find((item) => item.email=== useremail);
    if (user) {
      setMeetingSlot(user.slot);
      setInterviewer(user.Interviewer);
      setUserName(user.name);
    } else {
      setMeetingSlot('No meeting slot found for this user.');
      setInterviewer("No Interviewers Assigned")
      setUserName("Candidate Not Found")
    }
  };

  return (
    <div>
      <div className='email'>
      {/* <h1>Meeting Scheduler</h1> */}
      {/* <form onSubmit={(e) => { e.preventDefault(); searchMeetingTime(); }}> */}
          <input type="text" value={useremail} onChange={handleInputChange} placeholder='Enter Email' style={{marginLeft:"33%"}} />
        <button type="submit" onClick={(e) => { e.preventDefault(); searchMeetingTime(); }} style={{marginLeft:"45%",...(window.innerWidth <= 600 && {
                            marginLeft:"41%"
                        })}}>Submit</button>
      {/* </form> */}
      </div>
      {meetingSlot && (
        <div>
          <div className="card">
            <h2>Candidate Name:</h2>
            <p>{userName}</p>
          <h2>Time Slot:</h2>
            <p>{meetingSlot}</p>
           <h2>Interviewers:</h2>
            <p>{Interviewer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeetingScheduler;
