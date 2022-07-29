const AppButton = ({ label, onClick }) => {
  return (
    <button className="app-button" onClick={onClick}>
      {label}
    </button>
  );
};

const App = () => {
  const [count, setCount] = React.useState(0);
  const [lightOn, setLightOn] = React.useState(true);
  const todoList = ["Get up", "Take breakfast", "Go work", "Go home", "Sleep"];

  return (
    <div>
      <h1>Hello React App</h1>
      <p>Count: {count}</p>
      <div>
        {lightOn ? (
          <img src="./images/pic_bulbon.gif"></img>
        ) : (
          <img src="./images/pic_bulboff.gif"></img>
        )}
      </div>
      <h3>Todo list</h3>
      <ul>
        {todoList.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>

      <AppButton
        label={lightOn ? "Turn off" : "Turn on"}
        onClick={() => {
          setLightOn(!lightOn);
        }}
      />
      <AppButton
        label="Increase count"
        onClick={() => {
          setCount(count + 1);
        }}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(React.createElement(App));
