import { React, useEffect, useState } from "react";
import { Table, Button, Alert, Col } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {
  // state => cart 장바구니
  // reducer.js => reducer
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  const [alert, setAlert] = useState(true);
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
          {state[0] ? (
            state.map((a, i) => {
              return (
                <tr key={a.id}>
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
            <tr>
              <td colspan="4">장바구니에 상품이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </Table>
      {alert ? (
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
              setAlert(false);
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
