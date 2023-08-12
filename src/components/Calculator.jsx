import React, {useState, useRef} from "react";

export default function Calculator() {
    const inputRef = useRef(null); // <--- reference object for input element (stores current value)
    const totalRef = useRef(null); // <--- reference object for total element (stores result of equation)
    const [total, setTotal] = useState(0); // <--- state variable and setter function for total

    const add = e => {
        e.preventDefault(); // <--- prevents refresh on event trigger 
        setTotal(total => total + Number(inputRef.current.value)); // <--- updates total in state with additon (casts inputRefcurrent.value from String to Number)                
    }
    
    const subtract = e => {
        e.preventDefault();
        setTotal(total => total - Number(inputRef.current.value)) // <--- updates total in state with subtraction 
    }
    
    const multiply = e => {
        e.preventDefault();
        setTotal(total => total * Number(inputRef.current.value)) // <--- updates total in state with multiplication
    }
    
    const divide = e => {
        e.preventDefault();
        setTotal(total => total / Number(inputRef.current.value)) // <--- updates total in state with division
    }

    const clearInput = e => {
        e.preventDefault();
        inputRef.current.value = null; // <--- resets the input element text to placeholder
    }

    const clearTotal = e => {
        e.preventDefault();
        setTotal(0); // <--- resets the total state variable 
    }

  return (
    <div className="calculator">
        <h3>React Currency Calculator</h3>
        <form>
            <span ref={totalRef}>{total}</span>
            <input 
                pattern='[0-9]'
                ref={inputRef}
                type="number" 
                placeholder='Enter a number'
                />
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
            <button onClick={clearInput}>Clear Input</button>
            <button onClick={clearTotal}>Clear Total</button>
        </form>        
    </div>
  );
}

