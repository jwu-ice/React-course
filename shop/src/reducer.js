import { createStore } from "redux";

const default_state = [
  { id: 0, name: "White and Black", quantity: 2 },
  { id: 1, name: "Red Knit", quantity: 2 },
  { id: 6, name: "아식스신발", quantity: 2 },
];

function reducer(state = default_state, action) {
  if (action.type === "항목추가") {
    let copy = [...state];

    // 같은 상품이 없으면 데이터 푸시
    let findIndex = copy.findIndex((arr) => arr.id === action.data.id);
    if (findIndex === -1) {
      copy.push(action.data);
      // 같은 상품이 있으면
    } else {
      copy[findIndex].quantity++;
    }
    return copy;
  } else if (action.type === "수량증가") {
    let copy = [...state];
    let findState = copy.find((a) => a.id === action.data);
    findState.quantity++;
    return copy;
  } else if (action.type === "수량감소") {
    let copy = [...state];
    let findState = copy.find((a) => a.id === action.data);
    if (findState.quantity > 1) {
      findState.quantity--;
      return copy;
      // 수량이 0 이하일 시 삭제
    } else {
      let deleteState = copy.filter((a) => a.id !== action.data);
      copy = deleteState;
      console.log(default_state);
      return copy;
    }
  } else return state;
}
function reducer_alert(state = true, action) {
  if (action.type === "alert닫기") {
    state = false;
    return state;
  } else {
    return state;
  }
}

export { reducer, reducer_alert };
