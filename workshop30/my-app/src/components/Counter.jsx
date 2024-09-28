import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, fetchData } from '../features/counterSlice'; // Only import, don't declare again

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => state.counter.data);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(fetchData())}>Fetch Data</button>
      {data.title && <p>Data: {data.title}</p>}
    </div>
  );
}

export default Counter;
