import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../Store/Store';




const Counter = () => {
  const { decrement, increment, toggle } = counterActions


  const toggleCounterHandler = () => {
    dispatch(toggle())
  };

  const { count, isToggled } = useSelector((storeVal) => storeVal.counter);
  const storeVal = useSelector((state) => state)
  console.log(storeVal);
  const dispatch = useDispatch();

  const buttonStyle = {
    margin: '1rem'
  }

  const haddleIncrementDecrement = (actionType = '') => {
    if (actionType === 'INCREMENT') {
      dispatch(increment(1))
    } else {
      dispatch(decrement(1))
    }

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
