import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartIcon } from "./Icons.jsx";
import "./NavbarInicial.css";


export function NavbarInicial() {
  return (
    <>
      <Nav className="Navbar-Inicial justify-content-center align-items-center">
        <Navbar.Brand href="#home" className="mr-auto">
          <img
            src="/pizza.webp"
            width="45"
            height="45"
            className="PizzaLogo inline-block"
            alt="Pizza logo"
          />
        </Navbar.Brand>

        <Nav className="itemsContainer">
          <Nav.Item>
            <Nav.Link className="custom-link">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="custom-link">Pizzas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="custom-link">Drinks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="custom-link">Extras</Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav>
          <a className="cartIcon" href="">
            <CartIcon/>
          </a>
        </Nav>
      </Nav>
    </>
  );
}
