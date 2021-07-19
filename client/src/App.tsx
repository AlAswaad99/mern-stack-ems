import { Back } from "./styles/Background";
import React from "react";
import Employee from "./components/EmployeeComponent";

function App() {
  return (
    <Back>
      <div className="App">
        <Employee />
      </div>
    </Back>
  );
}

export default App;
