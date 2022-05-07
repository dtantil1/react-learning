import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import Search from "./components/Search";
import List from "./components/List";

const anytime = "Anytime, baby.....!!!";
const array1 = [1, 4, 9, 16];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/*anytime code here*/}
        <p>{anytime}</p>
        <ul>
          {array1.map( (a)=> { return <li>{a}</li>})}
        </ul>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ExpenseItem></ExpenseItem>
        <Search></Search>
        <br></br>


      </header>
      <List></List>
    </div>

  );
}

export default App;
