
import { useEffect, useState } from 'react';
/*
function Hello(){
  useEffect(() => {
    console.log("created :)");                //Show를 눌러 Hello가 나타날 때 함께 생기고,  Hide를 누르면 함께 사라진다.
    return () => console.log("destroyed :("); //Hide를 누르면 destoyed가 적힌 console이 return된다. !
  }, [])
  return <h1>Hello</h1>;
}
*/

/*
function Hello() {
  function byeFn(){
    console.log("bye :(");
  }
  function hiFn(){
    console.log("created :)");
    //component가 파괴될 때도 function을 실행하고 싶으면 hiFn이 byeFn을 return 하면 된다. !!
    return byeFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;  
}
*/

function Hello(){
//화살표 함수
useEffect(() => {
  console.log("hi :)");
  return () => console.log("bye :(");
}, [])
/*
//function 함수
useEffect(function (){
  console.log("hi :)");
  return function (){
    console.log("bye :(");
  }
}, [])
*/
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);  //setShowing을 통해 이전 value를 받아온 다음에, 그 value의 반댓값을 return 한다는 뜻.

  
  return (
    <div>
      {/* state가 바뀔 때, 즉 showing이 변경될 때 */}
      { showing ? <Hello /> : null }  
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
