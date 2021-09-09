/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";
import Detail from "./Detail.js";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoes변경] = useState(Data);

  function Product(props) {
    return (
      <div className="container">
        <div className="col-md-4">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (props.i + 1) +
              ".jpg"
            }
            width="100%"
          />
          <h4>{props.shoes.title}</h4>
          <p>
            {props.shoes.content} & {props.shoes.price}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="Detail">Detail</Link>
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
          <div className="row">
            {shoes.map((a, i) => {
              return <Product shoes={shoes[i]} i={i} key={i} />;
            })}
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
        {/* <Route path="/어쩌구" component={Modal}></Route> */}

        <Route path="/:id">
          <div>이용되지 않는 주소로 들어왔을 때 나오는 글~</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
