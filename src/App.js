import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Project from "./components/Project";

function App() {
  return (
    <>
      <nav className="navbar">
        <span className="title">TECHYON</span>
      </nav>
      <main className="page-wrapper">
        <Router>
          <Routes>
            <Route path="/project" element={<Project />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
