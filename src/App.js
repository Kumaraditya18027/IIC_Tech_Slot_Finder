import logo from './logo.svg';
import './App.css';
import MeetingScheduler from "./MeetingScheduler"
import ParticlesComponent from './components/Particles';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id='particles'/>
      <MeetingScheduler/>
    </div>
  );
}

export default App;
