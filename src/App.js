import { CounterGlobalContext } from "./contexts/counterGlobalContext";
import { Counter as CounterLocal, CounterGlobal } from "./components/Counter";
import useCounter from "./hooks/useCounter";

const App = () => {
  const [state, dispatch] = useCounter({
    count: 0,
    step: 1,
    min: 0,
    max: 3,
  });

  return (
    <CounterGlobalContext.Provider value={{ state, dispatch }}>
      <h3>Counter Local</h3>
      <CounterLocal />
      <hr />
      <h3>Counter Global</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 400,
        }}
      >
        <CounterGlobal />
        <CounterGlobal />
      </div>
    </CounterGlobalContext.Provider>
  );
};

export default App;
