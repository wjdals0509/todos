import { useState } from "react";

function App() {
  // input field control
  // todo : input의 value를 받아오는 변수
  // setTodo : input의 value를 수정하는 함수 (input 안의 내용이 변경됨)
  const [toDo, setToDo] = useState(""); // default는 공백 String값
  // 여러개의 toDo를 저장하는 배열
  const [toDos, setToDos] = useState([]);
  // target.value는 input field의 값을 나타냄
  // 이 값을 setToDo 함수에 전달
  const onChange = (event) => setToDo(event.target.value);
  // toDo 추가하기
  // form은 submit 이벤트를 기본적으로 갖고있기 때문에
  // event.preventDefault()로 기본동작인 새로고침을 막음
  const onSubmit = (event) => {
    event.preventDefault();
    // toDo에 값이 들어가는지 확인하기 위해
    // 만약 toDo가 공백이라면, preventDefault()가 작동하지 않도록
    if (toDo === "") {
      return;
    }
    // setToDos로 배열에 요소를 추가
    // 괄호 안에 previous value를 받아오기 위해 함수(currentArray) 사용
    // => 첫번째 인자로 현재의 State를 받아옴
    // state([])는 항상 새로운 것이어야 함 -> state에 있는 toDo + 모든 previous toDos
    setToDos((currentArray) => [toDo, ...currentArray]);
    // toDo가 공백이 아니라면, toDo를 추가 & input field 안을 비우기
    // => 일반적으로 State(toDo)를 직접 수정하지 않기 때문에
    //    setToDo 함수를 사용해서 수정해야함
    setToDo("");
  };
  // toDo 삭제하기
  const deleteBtn = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };

  return (
    <div>
      {/* toDo의 갯수 출력 */}
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        {/* to do 입력*/}
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        {/* button 클릭 시 form의 submit 이벤트 발생 */}
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {/* map()의 괄호안에 들어가는 함수는 배열의 모든 item에 적용됨  */}
        {/* .map(value, index, array) */}
        {toDos.map((item, index) => (
          // 동일한 component의 리스트를 render할 때는 key라는 prop을 넣어야함
          // key는 고유한 값이어야 하기 때문에 index를 넣어줌
          <li key={index}>
            {item}
            <button onClick={() => deleteBtn(index)}>❎</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
