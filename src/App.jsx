import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./components/mainpage/Mainpage";
import Ticket from "./components/ticket/Ticket"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/success" element={< Ticket/>} />
      </Routes>
    </Router>
  );
}

export default App;