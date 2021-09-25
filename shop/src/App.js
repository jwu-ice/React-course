/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";
import Detail from "./Detail.js";
import Cart from "./Cart.js";
import axios from "axios";
import { Link, Route, Switch, useHistory } from "react-router-dom";

export let storeContext = React.createContext();

function App() {
  let history = useHistory();
  let [shoes, shoes변경] = useState(Data);
  let [store, setStore] = useState([10, 11, 12]);

  let [loading, loading변경] = useState(false);
  let [buttonCount, buttonCount변경] = useState(2);
  let [closeButton, closeButton변경] = useState(true);

  //

  function Product(props) {
    let store = useContext(storeContext);

    return (
      <div className="col-md-4">
        <Link to={"/detail/" + props.shoes.id}>
          <img
            style={{ cursor: "pointer" }}
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (props.i + 1) +
              ".jpg"
            }
            width="100%"
          />
        </Link>
        <h4>{props.shoes.title}</h4>
        <p>
          {props.shoes.content} & {props.shoes.price}
        </p>
        {store[props.i]}
        <Test></Test>
      </div>
    );
  }

  function Test() {
    return <p> 재고 : {store}</p>;
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push("/");
            }}
          >
            ShoeShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="Detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/** route */}
      <Switch>
        <Route exact path="/">
          <div className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary" style={{ marginBottom: "10px" }}>
                Learn More
              </Button>
            </p>
          </div>
          <div className="container">
            {/*context 사용 value={ 공유값 }*/}
            <storeContext.Provider value={store}>
              <div className="row">
                {shoes.map((a, i) => {
                  return <Product shoes={a} i={i} key={i} />;
                })}
              </div>
            </storeContext.Provider>
            {loading ? <h2>로딩 중 ...</h2> : null}
            <hr />
            {closeButton ? (
              <button
                className="btn btn-primary"
                onClick={() => {
                  loading변경(true);
                  let res = buttonCount;
                  res++;
                  buttonCount변경(res);
                  console.log("buttonCount :>> ", buttonCount);

                  axios
                    .get(
                      "https://codingapple1.github.io/shop/data" +
                        buttonCount +
                        ".json"
                    )
                    .then((result) => {
                      loading변경(false);
                      shoes변경([...Data, ...result.data]);
                      closeButton변경(false);
                    })
                    .catch(() => {
                      console.log("우리 실패했어요");
                    });
                }}
              >
                더보기
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => {
                  closeButton변경(true);
                  buttonCount변경(2);
                  shoes변경([...Data]);
                }}
              >
                닫기
              </button>
            )}
          </div>
        </Route>

        <Route path="/detail/:id">
          <storeContext.Provider value={store}>
            <Detail store={store} shoes={shoes} setStore={setStore} />
          </storeContext.Provider>
        </Route>
        {/* <Route path="/어쩌구" component={Modal}></Route> */}

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/:name">
          <div>이용되지 않는 주소로 들어왔을 때 나오는 글~</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
