import "./styles/Currencies.css";

export default function Currencies(props) {
  const { currencies } = props;  
  return (
    <div className="container">
      <ol>
        {currencies.map((currency, index) => {          
          return (
            <li key={index} className="currency">
              {currency}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
