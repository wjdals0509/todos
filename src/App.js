import { useState } from "react";

function App() {
  // input field control
  // todo : input의 value를 받아오는 변수
  // setTodo : value를 수정하는 함수
  const [toDo, setToDo] = useState(""); // default는 공백 String값
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDo);
  return (
    <div>
      <form>
        {/* to do 입력*/}
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
      </form>
    </div>
  );
}

export default App;
