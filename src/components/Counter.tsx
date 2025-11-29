import { useEffect } from "react";
import useCounterStore from "../stores/counterStore";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count: ", count);
};

const setCount = () => {
  useCounterStore.setState({ count: 1 });
};

const Counter = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const incrementAsync = useCounterStore(
    (state) => state.incrementAsync
  );
  const decrementAsync = useCounterStore(
    (state) => state.decrementAsync
  );
  const resetAsync = useCounterStore((state) => state.resetAsync);

  useEffect(() => {
    setCount();
    logCount();
  }, []);

  return (
    <>
      <h2>{count}</h2>
      <div>
        <button onClick={increment}>Increment!</button>
        <button onClick={decrement}>Decrement!</button>
        <button onClick={reset}>Reset!</button>
      </div>
      <div>
        <button onClick={incrementAsync}>Increment Asyncronously!</button>
        <button onClick={decrementAsync}>Decrement Asyncronously!</button>
        <button onClick={resetAsync}>Reset Asyncronously!</button>
      </div>
    </>
  );
};

export default Counter;
