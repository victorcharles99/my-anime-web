import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Pages/Header/Header";
import "./App.css";
import { HomePage } from "./Home/HomePage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" component={HomePage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
