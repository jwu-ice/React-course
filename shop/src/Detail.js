/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";
import { storeContext } from "./App.js";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

let Box = styled.div`
  padding-top: 30px;
`;

function Detail(props) {
  let [input, inputChange] = useState();

  let { id } = useParams();
  let history = useHistory();
  let store = useContext(storeContext);

  let [tab, setTab] = useState(0);
  let [ani, setAni] = useState(false);

  //
  let findProduct = props.shoes.find((a) => a.id == id);

  function Info() {
    return <p>재고 : {store[0]}</p>;
  }

  return (
    <div className="container">
      {input}
      <input onChange={(e) => inputChange(e.target.value)} />

      <div className="row">
        <div className="col-md-6">
          <img
            className="img_detail_shoes"
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (findProduct.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price} 원</p>
          <Info />
          <button
            className="btn btn-danger"
            onClick={() => {
              props.setStore([9, 11, 12]);
              props.dispatch({
                type: "항목추가",
                data: {
                  id: findProduct.id,
                  name: findProduct.title,
                  quantity: 1,
                },
              });
              history.push("/cart");
            }}
          >
            장바구니에 쏙 넣기
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setAni(false);
              setTab(0);
            }}
          >
            as 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setAni(false);
              setTab(1);
            }}
          >
            as 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              setAni(false);
              setTab(2);
            }}
          >
            as 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={ani} classNames="wow" timeout={500}>
        <TabContent tab={tab} setAni={setAni} />
      </CSSTransition>
    </div>
  );
}

const TabContent = (props) => {
  useEffect(() => {
    props.setAni(true);
  });
  if (props.tab === 0) return <div>0번째 내용</div>;
  else if (props.tab === 1) return <div>1번째 내용</div>;
  else if (props.tab === 2) return <div>2번째 내용</div>;
};

function state_store(state) {
  return {
    state: state.reducer,
    alert_bool: state.reducer_alert,
  };
}

export default connect(state_store)(Detail);
