const default_state = [];
function reducer(state = default_state, action) {
  let copy = [...state];
  let findState;
  switch (action.type) {
    case "항목추가":
      let findNum = copy.findIndex((arr) => arr.id === action.data.id);

      // 같은 상품이 없으면 데이터 푸시
      if (findNum === -1) {
        copy.push(action.data);

        // 같은 상품이 있으면
      } else {
        copy[findNum].quantity++;
      }
      return copy;

    case "수량증가":
      findState = copy.find((a) => a.id === action.data);
      findState.quantity++;
      return copy;

    case "수량감소":
      findState = copy.find((a) => a.id === action.data);
      if (findState.quantity > 1) {
        findState.quantity--;
        // 수량이 0 이하일 시 삭제
      } else {
        let deleteState = copy.filter((a) => a.id !== action.data);
        copy = deleteState;
      }
      return copy;

    default:
      console.log(`오류100`);
      return state;
  }
}

export { reducer };
