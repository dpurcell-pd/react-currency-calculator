import './App.css';
import {useState, useRef} from "react";
import Calculator from './components/Calculator';

export default function App() {  
  const assignmentRef = useRef();
  const [assignment, setAssignment] = useState(0);
  return (
    <div className="container">
      <Calculator assignmentRef={assignmentRef} />     
     
    </div>
  );
}

