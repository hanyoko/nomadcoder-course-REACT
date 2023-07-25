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
  //console.log 코드를 실행하고, dependency(빈배열 안의 코드)는 가지고 있지 않다.
  //이건 react.js가 지켜볼 대상이 없기 때문에 코드가 한번만 실행될 거라는 걸 의미한다.
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  //빈 배열로 써주면 코드가 단 한번만 실행된다.
  //keyword가 변화할 때 브라우저에 console.log을 찍어준다.
  useEffect(() => {
    console.log("I run when 'keyword' changes."); //counter가 변화할 때는 제외하고 keyword가 변화할 때만 코드를 실행하도록
  }, [keyword]);
  //만약 keyword가 변화할 때 코드를 실행하고 싶다면, [] 자리에 keyword를 써준다.
  //여기서 하는 건, 이 "keyword"가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것
  
  //조건이 있는 useEffect
  //이 코드는 keyword가 변화할 때마다 실행되는데, 우리가 체크할 조건을 한가지 더 넣어줬다.
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5)
    console.log("5개 이상의 문자가 입력되었습니다.", keyword);
  });

  //dependency에 counter만 써줬기 때문에, counter가 변화할 때만 실행된다.
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  //dependency에 keyword, counter를 입력했기에, 둘 중 하나라도 변화가 일어나면 이 코드를 실행할 수 있다.
  useEffect(() => {
    console.log(" I run when keyword & counter change.");
  }, [keyword, counter]);

  //useEffect는 코드를 언제 실행할 지 선택하는 것
  //react.js가 동작하는 관점에서 말하자면 방어막 같은 것이다.
  //리액트는 state를 변화시킬 때 component를 재실행시킨다. 모든 코드가 재실행된다는 말.
  //이건 UI 관점으로 보면, 새로운 데이터가 들어올 때마다 자동으로 새로고침 되니 좋은 일이긴 한데,
  //문제는, 어떤 코드들은 이렇게 계속 실행되면 안 될 수도 있다는 것. 이게 바로 useEffect를 사용하는 이유 !
  //useEffect를 통해 언제 코드를 실행할 지 선택권을 가질 수 있다.
  //[] (dependency)의 뜻은 처음 실행(render)시에 딱 한번만 실행하고 다시는 하지 말아라 !
  //[] 안에 코드를 입력하면 그 코드의 변화 시에 실행해라 
  //[] 안에 두개의 코드를 입력하면 둘 중 하나가 변화 시에 실행하라는 말이다
  //useEffect는 딱 두개의 argument / 실행하려는 코드 / [] dependency(지켜보려는 것) 으로만 이루어져 있다.
  
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
