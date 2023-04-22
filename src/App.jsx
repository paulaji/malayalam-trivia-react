import "./app.css";

function App() {
  return (
    <div className="app">
      <div className="main">main</div>
      <div className="pyramid">
        <ul className="moneyList">
          <li className="moneyListItem active">
            <span className="moneyListItemNumber">1</span>
            <span className="moneyListItemAmount">2 Coconuts</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">2</span>
            <span className="moneyListItemAmount">1kg Poovan Banana</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">3</span>
            <span className="moneyListItemAmount">25kg Matta Rice Sack</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">Nolta Kitchen Set</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
