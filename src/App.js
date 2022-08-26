import React, { useState } from "react";
import Header from "./iWallet/header";
import Spendlist from "./iWallet/spendlist";
import Totalbalance from "./iWallet/totalbalance";
import Form from "./iWallet/Form";
import './App.css';

function App() {

  const [spendlist, setSpendlist] = useState([]);

  return (
    <div className="App">
      <Header />
      <Totalbalance spendlist={spendlist} />
      <Spendlist spendlist={spendlist} setSpendlist={setSpendlist} />
      <Form spendlist={spendlist} setSpendlist={setSpendlist} />
    </div>
  );
}

export default App;
