import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Customers from './Components/Customers';
import Transfer from './Components/Transfer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/transfer" element={<Transfer />} />
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route exact path="/customers" element={<Customers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
