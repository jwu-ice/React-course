/* eslint-disable */
import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [inven, invenChange] = useState("");

  let [입력값, 입력값변경] = useState("");

  const array = [2, 3, 4];
  const newArray = array.map((a) => a * 2);

  function 글변경() {
    var res = [...글제목];
    res[0] = "여자 코트 추천";
    글제목변경(res);
  }

  function 글정렬() {
    var res = [...글제목];
    res.sort();
    글제목변경(res);
  }

  function ddabong(i) {
    var res = [...따봉];
    res[i]++;
    따봉변경(res);
  }

  function 버튼누를시입력값변경(e) {
    let res = [...글제목];
    res.unshift(e);
    글제목변경(res);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={글변경} style={{ margin: "20px" }}>
        수정 버튼
      </button>
      <button onClick={글정렬} style={{ marginLeft: "" }}>
        정렬 버튼
      </button>
      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {a}
              <span
                onClick={() => {
                  ddabong(i);
                }}
              >
                {" "}
                👍{" "}
              </span>
              {따봉[i]}
            </h3>
            <p>6월 {10 + i}일 발행</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button onClick={() => 버튼누를시입력값변경(입력값)}>저장</button>
      </div>

      <Profile />

      <button
        className="modalbutton"
        onClick={() => {
          modal변경(!modal);
        }}
      >
        모달창 여닫기 버튼
      </button>
      {modal === true ? (
        <Modal 글제목={글제목} 바보="바부야" 누른제목={누른제목}></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "Kim", age: 30 };
  }

  changeName = () => {
    this.setState({
      name: "Park",
    });
  };

  render() {
    return (
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick={this.changeName.bind(this)}>버튼</button>
      </div>
    );
  }
}

export default App;
