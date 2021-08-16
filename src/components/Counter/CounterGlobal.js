import { useContext } from "react";

import { CounterGlobalContext } from "../../contexts/counterGlobalContext";
import { InputDiv as Input } from "../InputDiv";

const CounterGlobal = () => {
  const { state, dispatch } = useContext(CounterGlobalContext);
  return (
    <div>
      <div>{state.count}</div>

      <div>
        <button
          onClick={() => {
            dispatch({
              type: "increment",
            });
          }}
        >
          Incrementar
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "decrement",
            });
          }}
        >
          Decrementar
        </button>
      </div>
      <Input
        title="Step"
        value={state.step} //é o valor que aparece no input da pagina
        onInput={(value) => {
          dispatch({
            type: "set_step",
            payload: { step: Number(value) }, //pega o valor do input
          });
        }}
      />

      <Input
        type="number"
        title="Min"
        value={state.min} //é o valor que aparece no input da pagina
        onInput={(value) => {
          dispatch({
            type: "set_min",
            payload: { min: Number(value) }, //pega o valor do input
          });
        }}
      />
      <Input
        type="number"
        title="Max"
        value={state.max || ""} //é o valor que aparece no input da pagina
        onInput={(value) => {
          dispatch({
            type: "set_max",
            payload: { max: Number(value) }, //pega o valor do input
          });
        }}
      />
    </div>
  );
};

export default CounterGlobal;
