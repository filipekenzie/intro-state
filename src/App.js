import { useState } from "react";
import "./App.css";

import Register from "./components/Register";
import Students from "./components/Students";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Students students={students} />
        <Register students={students} setStudents={setStudents} />
      </header>
    </div>
  );
}

export default App;
