// import { useDispatch } from "react-redux";
// import { useSelector, useDsipatch } from "react-redux";
import React from "react";
import Count from "./components/Count";
import { createStore } from "redux";
import { Provider } from "react-redux";

const state = {
  contador: 0,
};

function reducers(state, action) {
  switch (action.type) {
    case "MAS_CONTADOR":
      return {
        ...state,
        contador: state.contador + 1,
      };

    case "MENOS_CONTADOR":
      return {
        ...state,
        contador: state.contador - 1,
      };
    default:
      return state;
  }
}

const store = createStore(
  reducers,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;
