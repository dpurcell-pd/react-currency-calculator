import React, {useState, useRef, useEffect} from "react";
import "react-bootstrap/dist/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Currencies from "./Currencies";
import {Alert, Badge, Button} from "react-bootstrap";


export default function Calculator() {
    const inputRef = useRef(null); // <--- reference object for input element (stores current value)    
    const [total, setTotal] = useState(0); // <--- state variable and setter function for total    
    const [currenciesArray, setCurrenciesArray] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const TOP_TEN_CURRENCIES = ["KWD","BHD","OMR","JOD","GBP","GIP","KYD","CHF","EUR","USD"] // <--- currencies for fetch URL
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
    ]; // <--- currency names for display
       
            
    const ratesData = async e => {
        let arr = [];
        let index = 0;
        e.preventDefault();
        try {
            const res = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=${TOP_TEN_CURRENCIES}`);
            const data = await res.json();
            const {rates} = data;
            if (total > 0) {
                Object.entries(rates).forEach(([key, value]) => {
                    arr.push(`${TOP_TEN_CURRENCIES_NAME[index]}(${key}):${(value * total).toFixed(3)}`); // <--- pushes formatted currency string to temp array 
                    index++;
                })
            } else {
                alert("To perform conversions, enter a number greater than 0 and update the total.");
            } 
            setCurrenciesArray(arr);           // <--- updates state with populated array
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

    useEffect(() => {
        if (currenciesArray.length > 0) {
            console.clear();
            currenciesArray.map(element => {
                console.log(element);
            }) 
        }
    }, ) // <--- updates console display with currency array on state update

  return (
    <>
    <div className="calculator">
        <Alert variant="success">React Currency Calculator v1.0</Alert>       
        <form>
            <h1>
                <Badge className="total" bg="dark">{total}</Badge>                
            </h1>            
            <br /><br />
            <input
                className="input" 
                pattern='[0-9]'
                ref={inputRef}
                type="number" 
                placeholder='Enter a number'
                />
            <br /> <br />
            <div>
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
            </div>
                        
        </form>
    </div>
    <Currencies currencies={currenciesArray} />        
    </>
  );
}

