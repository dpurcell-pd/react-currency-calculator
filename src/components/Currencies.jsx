import "./styles/Currencies.css";

export default function Currencies(props) {
  const { currencies } = props;
  let id = -1;
  return (
    <div className="container">
      <ol>
        {currencies.map(function (currency) {
          {
            id++;
          }
          return (
            <li key={id} className="currency">
              {currency}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
