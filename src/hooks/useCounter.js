import { useReducer } from "react";
import reducer from "../reducers/counteReducer";

const useCounter = ({ count, step, min, max }) => {
  const [state, dispatch] = useReducer(reducer, {
    count,
    step,
    min,
    max,
  });
  return [state, dispatch];
};

export default useCounter;
