import zustandLogo from "./assets/zustand.svg";
import "./App.css";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count);
  return (
    <>
      <a href="https://github.com/pmndrs/zustand" target="_blank">
        <img src={zustandLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Learning Zustand</h1>
      <div className="card">
        <h2>
          <SomeComponent count={count} />
        </h2>
      </div>
    </>
  );
}

const SomeComponent = ({ count }: { count: number }) => {
  return <>{count}</>;
};

export default App;
