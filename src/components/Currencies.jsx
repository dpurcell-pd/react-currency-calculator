import "./styles/Currencies.css";

export default function Currencies(props) {
  const { currencies, displayCurrencies } = props;

  if (!displayCurrencies) {
    return null;
  } else {
    return (
      <div className="container">
        <h2>Currencies:</h2>
        <br />
        <br />        
      </div>
    );
  }
}
