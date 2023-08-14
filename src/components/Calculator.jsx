import React, {useState, useRef} from "react";
import {Button, Navbar, Form} from "react-bootstrap";


export default function Calculator() {
    const inputRef = useRef(null); // <--- reference object for input element (stores current value)
    const totalRef = useRef(null); // <--- reference object for total element (stores result of equation)
    const [total, setTotal] = useState(0); // <--- state variable and setter function for total

    const API_KEY = process.env.REACT_APP_API_KEY;
    const TOP_TEN_CURRENCIES = ["KWD","BHD","OMR","JOD","GBP","GIP","KYD","CHF","EUR","USD"]   
    const TOP_TEN_CURRENCIES_NAME = [
        "Kuwaiti Dinar",
        "Bahraini Dinar",
        "Omani Rial",
        "Jordanian Dinar",
        "British Pound",
        "Gibraltar Pound",
        "Cayman Islands Dollar",
        "Swiss Franc",
        "Euro",
        "United States Dollar"
    ];
    
   
    
    
    const ratesData = async e => {
        let index = 0;
        e.preventDefault();
        try {
            const res = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=${TOP_TEN_CURRENCIES}`);
            const data = await res.json();
            const {rates} = data;            
            Object.entries(rates).forEach(([key, value]) => {
                console.log(`${TOP_TEN_CURRENCIES_NAME[index]}(${key}):${value * total}`);
                index++;
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    
        
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
        <Navbar bg="success" variant="dark">             
            <h3 className="text-center">React Currency Calculator</h3>        
        </Navbar>                
        <Form>
            <Form.Group>
            <span ref={totalRef}>{total}</span>
            <br /><br />
            <input 
                pattern='[0-9]'
                ref={inputRef}
                type="number" 
                placeholder='Enter a number'
                />
            <Button 
                onClick={add}>+</Button>
            <Button 
                onClick={subtract}>-</Button>
            <Button 
                onClick={multiply}>*</Button>
            <Button 
                onClick={divide}>/</Button>
            <Button 
                variant="danger" 
                onClick={clearInput}>Clear Input</Button>
            <Button
                variant="danger" 
                onClick={clearTotal}>Clear Total</Button>
            <Button 
                variant="success"
                onClick={ratesData}
            >Get Rates</Button>            
            </Form.Group>            
        </Form>        
    </div>
  );
}

