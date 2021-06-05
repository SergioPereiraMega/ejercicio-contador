import { useDispatch, useSelector } from "react-redux";
import "./Count.css";

function Count() {
  const dispatch = useDispatch();
  const contador = useSelector((state) => state.contador);
  return (
    <div className='contador'>
      <h3>Contador de numeros</h3>
      <button onClick={(e) => dispatch({ type: "MAS_CONTADOR", payload: +1 })}>Incrementar</button>
      <h1>{contador}</h1>
      <button onClick={(e) => dispatch({ type: "MENOS_CONTADOR", payload: -1 })}>Disminuir</button>
    </div>
  );
}

export default Count;
