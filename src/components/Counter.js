import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';


const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' })
  };

  const { count, isToggled } = useSelector((storeVal) => storeVal);
  const dispatch = useDispatch();

  const buttonStyle = {
    margin: '1rem'
  }

  const haddleIncrementDecrement = (actionType = '') => {
    console.log(actionType);
    dispatch({ type: actionType, payload: 1 })
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!isToggled && <div className={classes.value}>{count} </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>

      <button onClick={haddleIncrementDecrement.bind(null, 'DECREMEMT')} style={buttonStyle} > Decrement </button>
      <button onClick={() => haddleIncrementDecrement('INCREMENT')} style={buttonStyle}> Increment </button>
    </main>
  );
};

export default Counter;
