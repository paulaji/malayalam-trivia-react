import "./app.css";
import { useState } from "react";
import Trivia from "./components/Trivia.jsx";

function App() {
  const [questionNumber, setQuestionNumber] = useState(5);
  const moneyPyramid = [
    { id: 1, amount: "2 Coconuts" },
    { id: 2, amount: "1kg Banana (Poovan)" },
    { id: 3, amount: "25kg Matta Rice Sack" },
    { id: 4, amount: "20 Packet Charapara Easy Paalappam Mix" },
    { id: 5, amount: "Vestige Induction Cooktop" },
    { id: 6, amount: "Thankam Gold's gift voucher" },
    { id: 7, amount: "Lalism (Sri. Mohananlal Ganamela) ticket" },
    { id: 8, amount: "Date with BaChe (Baby Chemmanur)" },
    { id: 9, amount: "KulirThennal 5star rated AC" },
    { id: 10, amount: "1000 OTTA brand Premium Shirt" },
    { id: 11, amount: "100 BSA LadyBoy cycles" },
    { id: 12, amount: "50 iKall 14 Pro (2MP front + back)" },
    { id: 13, amount: "Joe Alukkas Diamond Necklace" },
    {
      id: 14,
      amount:
        "Trip with Dr. Bobin Radhakrishnan (7day trip, no-shouting package)",
    },
    { id: 15, amount: "Skyline 12B flat" },
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia />
        </div>
      </div>

      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
