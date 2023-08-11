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
            <span ref={totalRef}>{total}</span>
            <input 
                pattern='[0-9]'
                ref={inputRef}
                type="number" 
                placeholder='Enter a number'
                />
            <button onClick={add}>+</button>
        </form>        
    </div>
  );
}

