import './App.css';
import { NavBar } from './components/navbar';
import { CalendarWidget } from './components/calendar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CalendarWidget />
    </div>
  );
}

export default App;
