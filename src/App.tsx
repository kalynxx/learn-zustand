import "./App.css";
import zustandLogo from "./assets/zustand.svg";
import Counter from "./components/Counter";
import useCounterStore from "./stores/counterStore";

function App() {
  /*
   * When accessing a store from within a react component,
   * make sure to ONLY access the specific part of the store
   * that you need, or else the component is going to rerender
   * each time the entire store gets updated!
   */
  const count = useCounterStore((state) => state.count);

  return (
    <>
      <a href="https://github.com/pmndrs/zustand" target="_blank">
        <img src={zustandLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Learning Zustand</h1>
      <div className="card">
        <Counter count={count} />
      </div>
    </>
  );
}

export default App;
