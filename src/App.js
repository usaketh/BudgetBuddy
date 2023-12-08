//Context API, useReducer
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
//Lexicon hackathon winner interested in Netflix
/*I am interested in interning at Netflix this summer as a software engineer.

Have most experience in web development:
https://github.com/usaketh

Solved 500 problems on Leetcode: https://leetcode.com/uddantisaketh2001/

Loved the latest shows on Netflix
Would love to start the interview process

Thanks.
*/
import React from 'react';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
