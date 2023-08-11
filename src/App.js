import './App.css';
import {useState, useRef} from "react";
import Calculator from './components/Calculator';

export default function App() {
  return (
    <div className="container">
      <Calculator />          
    </div>
  );
}

