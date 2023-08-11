import React, {useState, useRef} from "react";

export default function Calculator() {
    const assignmentRef = useRef(null);
    const [total, setTotal] = useState(0);
    const inputRef = useRef();

    const add = e => {
        e.preventDefault();
        setTotal(prevTotal => prevTotal + Number(inputRef.current.value));
        inputRef.current.value = "Enter a number";
    }
    
    const subtract = e => {
        e.preventDefalt();
    }
    
    const multiply = e => {
        e.preventDefalt();
    }
    
    const divide = e => {
        e.preventDefault();
    }

  return (
    <div className="calculator">
        <h3>React Currency Calculator</h3>
        <form>
            <span ref={assignmentRef}>{total}</span>
            <input 
                pattern='[0-9]'
                ref={inputRef}
                type="number" 
                placeholder='Enter a number'
                />
            <button onClick={add}>+</button>
        </form>
        
    </div>
  )
}

