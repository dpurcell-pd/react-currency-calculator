React Currency Calculator

This application, at it's core functions as a simple calculator. It displays a simple form with an input box that will accept any number and use it to update the "total" state variable based on the selected mathmatical operator.

Ex. Entering 25 into the input box and pressing + will update the "total" variable by adding 25. Pressing the + button again will perform 25 + 25 / * will perform 25 * 25 / and so on until a different number is provided. 

Both the input box and the "total" state variable can be reset at any time via their respective Clear Input / Clear Total buttons.

Additionally, when the "total" state value is assigned any number greater than zero, pressing the "Get Rates" button will convert the value of "total" to the top 10 global currencies (as of August 2023), and render them to the DOM in an ordered list. 

Please note that the current version of this application only supports conversions from Euros.


Technologies Used:

Exchanges Rates API: https://exchangeratesapi.io/
HTML / CSS / Bootstrap / JavaScript / React 

Installation instructions:

1. Clone a copy of the repository to your local machine.
2. Open the root project directory in your terminal, and run npm install to download node_modules.
3. Run npm start to serve the application locally.  

