/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let Box = styled.div`
  padding-top: 30px;
`;

let Naming = styled.h4`
  font-size: 25px;
  color: ${(props) => props.sacksang};
`;

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();

  let findProduct = props.shoes.find((a) => a.id == id);
  return (
    <div className="container">
      <Box>
        여긴 박스자린데요
        <Naming className="red">Detail Page</Naming>
        <Naming sacksang="purple">Detail Page</Naming>
      </Box>
      <div className="my-alert2">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price} 원</p>
          <button className="btn btn-danger">주문하기</button>
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
    </div>
  );
}

export default Detail;
