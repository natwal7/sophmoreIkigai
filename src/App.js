import './App.css';
import googleCalendar from './cal.png';
//* const img = new Image("./Desktop/googleCalendar");
//* import { SignIn } from "./Pages";$


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Your Patient Care</title>
      </header>
      <div class="titleHead">
        <p>Welcome to your Centralized Care Hub</p>
      </div>
      
      {/* <div class="login">
        <p class="loginTitle">Log-In</p>
        <label class="loginInput">Username: <input type="input" minlength="8" placeholder="LastFirst" required/></label>
        <label class="loginInput">Password: <input type="password" minlength="8" placeholder="something secure..." required/></label>
        <input type="submit" class="submission"/>
        </div>
      */}
      <div class="dash-main">
        <p class="dashTitle">Dashboard</p>
        <div class="container1">
          <div class="calendar">
            <h3>Upcoming Appointments</h3>
            
            <a href="https://calendar.google.com/" class="sitelink">
              <img src={googleCalendar} alt="calendar"/>
            </a>
          </div>
          <div class="medSchedule">
            <h3>Medication Schedule</h3>
          </div>
        </div>
        <div class="container2">
          <div class="notes">
            <h3>Recent Doctors' Notes</h3>
          </div>
          <div class="form">
            <h3>Symptom Change Form</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

