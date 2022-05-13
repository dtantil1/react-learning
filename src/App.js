import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import Search from "./components/Search";
import List from "./components/List";

const anytime = "Anytime, baby.....!!!";
const array1 = [1, 4, 9, 16];

function App() {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
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
      <List list={stories} />
    </div>

  );
}

export default App;
