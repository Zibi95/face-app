import Navbar from './components/Navbar';
import Form from './components/Form';
import { Particle } from './components/Particle';
import './App.css';

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <div className="h-20"></div>
      <Form />
    </>
  );
}

export default App;
