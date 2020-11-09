import React, { useState } from 'react';
import Bill from './components/Bill';
import Tip from './components/Tip';
import TotalBill from './components/TotalBill';


const App = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(1);

  function handleBillChange(e) {
    const grossBill = e.target.value;
    setBill(grossBill);
  }

  function handleTipChange(e) {
    const tipRate = e.target.value;
    setTip(tipRate);
  }

  return (
    <div >
      <h1>Total Bill and Tip generator</h1>
      <Bill handleChange={handleBillChange} bill={bill} />
      <Tip handleChange={handleTipChange} tip={tip} />
      <TotalBill tip={tip} bill={bill} />
    </div>
  );
};

export default App;
