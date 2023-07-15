import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarInicial.css";

export function NavbarInicial() {
  return (
    <>
      <Nav className="Navbar-Inicial">
        <Navbar.Brand href="#home">
          <img
            src="/public/pizza.webp"
            width="45"
            height="45"
            className="PizzaLogo inline-block"
            alt="Pizza logo"
          />
        </Navbar.Brand>

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
    </>
  );
}
