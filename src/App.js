import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // form이 갖고 있는 submit 이벤트 정지
    // 아무것도 작성하지 않으면 바로 return
    // 그게 아니고 작성 된 후엔 작성칸 비워줌
    if (toDo === '') {
      return;
    }
    // ✨ array에 element를 추가하는 방법
    // array를 직접적으로 수정하지 않으면서 setToDos로 array에 element를 추가하는 방법
    // 1. setToDo(''); 값을 직접 수정 - 값만 보내는 방법
    // 2. 함수 사용 - 함수를 보내는 방법
    // 함수를 보낼 때 react.js는 함수의 첫 번째 argument로 현재 State로 보냄
    // 그러면 우리는 이 현재 State를 계산하거나 새로운 State를 만드는데 사용할 수 있게 됨
    // 여기서는 현재 toDos를 받아와서 새로운 toDo의 array로 return하고 있는 것
    // 현재 State에 들어있는 모든 요소들을 더해서 새로운 State를 계산할 수 있다
    setToDos((currentArray) => [toDo, ...currentArray]);

    // 🌱 to-do를 추가할 때, 자바스크립트에서는 toDos.push 해서 수정하면 되지만
    // 🌱 state를 직접 수정하지 않는다
    // toDo = '' <- 이렇게 자바스크립트 처럼
    // 항상 수정하는 함수를 사용
    setToDo(''); // 입력 후 빈 값으로 만들기
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/* array로부터 동일한 component에 있는 많은 것들을 render 하는 방법 */}
      <ul>
        {/* {index는 숫자} */}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
