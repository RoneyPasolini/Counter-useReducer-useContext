function reducer(state, action) {
  switch (action.type) {
    case "increment":
      const sum = state.count + state.step;
      const newCount = isNaN(state.max)
        ? sum
        : sum <= state.max
        ? sum
        : state.count;
      return { ...state, count: newCount };
    case "set_step":
      return { ...state, step: action.payload.step };
    case "decrement":
      const sub = state.count - state.step;
      const newCount2 = isNaN(state.min)
        ? sub
        : sub >= state.min
        ? sub
        : state.count;
      return { ...state, count: newCount2 };
    case "set_min":
      return { ...state, min: action.payload.min };
    case "set_max":
      return { ...state, max: action.payload.max };
    default:
      return state;
  }
}

export default reducer;
