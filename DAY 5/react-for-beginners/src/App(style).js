import './App.css';
import Button from "./Button";
import styles from "./App.module.css"

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);

  return (
    <div className="App">
      <h1 className={styles.title}>Welcome back !!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
