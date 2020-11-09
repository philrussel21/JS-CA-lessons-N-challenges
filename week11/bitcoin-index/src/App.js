import React, { useState } from 'react';
import CurrencySelector from './components/CurrencySelector';
import DataDisplay from './components/DataDisplay';

const App = () => {
  const defaultCurrency = "AUD";
  const [currency, setCurrency] = useState(defaultCurrency);

  const currencyChangeHandler = (newCurrency) => {
    console.log("new currency: ", newCurrency);
    setCurrency(newCurrency);
  };

  return (
    <div >
      <h1>Bitcoin Index</h1>
      <CurrencySelector currency={currency} handleCurrencyChange={currencyChangeHandler} />
      <DataDisplay />
    </div>
  );
};

export default App;
