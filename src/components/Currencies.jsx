import "./styles/Currencies.css";

export default function Currencies(props) {
  const { currencies, displayCurrencies } = props;
  let id = -1;
  if (!displayCurrencies) {    
    return null;
  } else {
    return (        
      <div className="container">            
        <ol>
            {currencies.map(function(currency) {
                {id++}               
                return (                    
                    <li key={id} className="currency">{currency}</li>                      
                );                
            })}
        </ol>
      </div>
    );
  }
}
