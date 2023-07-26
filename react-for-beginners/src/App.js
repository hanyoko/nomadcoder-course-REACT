import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>The Coins ! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading . . .</strong> : null}
      <ul>
        {/* map에 index가 필요없다. why? 가져오는 api에 이미 id를 가지고 있으니 그 id를 key로 사용할 수 있다. */}
        {coins.map((coin) => <li key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</li>)}
      </ul>
    </div>
  );
}

export default App;
