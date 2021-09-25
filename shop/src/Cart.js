import { React, useState } from "react";
import { Table, Button, Alert, Col } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {
  // 쉽게 사용하는 법
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  const [popup, setPopup] = useState(true);
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {popup ? (
            state.reducer.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.quantity}</td>
                  <td>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        dispatch({
                          type: "수량증가",
                          data: a.id,
                        });
                      }}
                    >
                      +
                    </Button>
                    &nbsp;
                    <Button
                      variant="secondary"
                      onClick={() => {
                        dispatch({
                          type: "수량감소",
                          data: a.id,
                        });
                      }}
                    >
                      -
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h5>장바구니에 상품이 없습니다.</h5>
          )}
        </tbody>
      </Table>
      {state.reducer_alert ? (
        <Alert variant="success">
          <Alert.Heading>지금 구매하시면 신규할인 20%</Alert.Heading>
          <p>여러가지 할인혜택을 만나보세요! 지금</p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
          <br />
          <Button
            variant="secondary"
            onClick={() => {
              dispatch({ type: "alert닫기" });
            }}
          >
            닫기
          </Button>
        </Alert>
      ) : null}
    </div>
  );
}

/** 
function state를props화(state) {
  return {
    state: state.reducer,
    alert_bool: state.reducer_alert,
  };
}

export default connect(state를props화)(Cart);
*/
export default Cart;
