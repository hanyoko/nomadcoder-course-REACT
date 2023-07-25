import './App.css';
import styles from "./App.module.css"
import { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time");
  
  /*
  const iRunOnlyOnce = () => {
    console.log("CALL THE API ....");
  }
  useEffect(iRunOnlyOnce, []);
  */
  //단순화
  //useEffect function은 코드가 딱 한번만 실행될 수 있도록 보호해준다.
  useEffect(() => {
    console.log("CALL THE API ....");
  }, []);
  //빈 배열로 써주면 코드가 단 한번만 실행된다.
  useEffect(() => {
    console.log("SEARCH FOR", keyword); //counter가 변화할 때는 제외하고 keyword가 변화할 때만 코드를 실행하도록
  }, [keyword])
  //만약 keyword가 변화할 때 코드를 실행하고 싶다면, [] 자리에 keyword를 써준다.
  //여기서 하는 건, 이 "keyword"가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것
  //
  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here ..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Cilck Me</button>
    </div>
  );
}

export default App;
