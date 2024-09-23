import "./App.css";
import Counter from "./counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("button clicked 2");
  };
  return (
    <>
      <h3>React Core Concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      {/* //Normal function */}
      <button onClick={handleClick}>Click Me</button>

      {/* //Arrow function */}
      <button onClick={handleClick2}>Click 2</button>

      {/* // button on click shortcut way */}
      <button
        onClick={() => {
          alert("Third Click");
        }}
      >
        Third
      </button>
    </>
  );
}

export default App;
