import React, { useState, useEffect } from 'react';
import CurrencySelector from './components/CurrencySelector';
import DataDisplay from './components/DataDisplay';

const App = () => {
  const defaultCurrency = "AUD";
  const [currency, setCurrency] = useState(defaultCurrency);
  const [bitcoinData, setBitcoinData] = useState({});

  const currencyChangeHandler = (newCurrency) => {
    console.log("new currency: ", newCurrency);
    setCurrency(newCurrency);
  };

  const bitcoinApi = "https://api.coindesk.com/v1/bpi/historical/close.json";
  useEffect(() => {
    function getData() {
      fetch(`${bitcoinApi}?currency=${currency}`)
        .then(res => res.json())
        .then(data => setBitcoinData(data.bpi))
        .catch(e => e);
    }
    getData();
  }, [currency]);

  return (
    <div >
      <h1>Bitcoin Index</h1>
      <CurrencySelector currency={currency} handleCurrencyChange={currencyChangeHandler} />
      <DataDisplay data={bitcoinData} />
    </div>
  );
};

export default App;
