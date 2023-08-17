import React from 'react'

export default function Footer() {
  return (
    <div className="footer">  
        <h3>Quickstart Guide:</h3>
        <br />
        <ol className="instructions">
            <li>This application functions as a simple calculator that takes an input number and performs the selected operation on the total value shown in the box.</li>
            <div className='example'>
                <p className='italic'>
                    - Typing 25 into the box and pressing + will add 25 to the total.
                    <br />
                    - From there, typing a new number and pressing * will multiply that number by 25.
                </p>
            </div>
            <li>Once you have found a number that you would like to see converted into a list of currencies, press the "Get Rates" button.</li>
            <div className='example'>
                <p className='italic'>
                    - Currently, this application only supports conversions from Euro to the top ten global currencies (as of August 2023), rendered to the DOM in an ordered list.
                </p>
            </div>
        </ol>        
        <br /> 
    </div>
  )
}

