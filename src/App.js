import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";

//Components
import Header from "./components/Header"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </Router> 
  );
}

export default App;

