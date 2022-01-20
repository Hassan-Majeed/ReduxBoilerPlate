import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNum, decNum } from './actions/index';
function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const disPatch = useDispatch();

  return (
    <>
      <h1>Redux Boiler Plate</h1>
      <div>
        <button onClick={() => disPatch(decNum(5))} >Decrement</button>
        <input type="text" value={myState} />
        <button onClick={() => disPatch(incNum(5))}>Increment</button>
      </div>
    </>
  );
}

export default App;
