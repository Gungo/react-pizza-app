// weboack module bunder expects index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Components as functions.

function Header() {
  return (
    <header className="header">
      <h1>Gungo Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizzaObj) => (
            <Pizza pizzaObj={pizzaObj} key={pizzaObj.name} />
          ))}
        </ul>
      ) : (
        <h3>Menu coming soon! Please come back later.</h3>
      )}
    </main>
  );
}

function Pizza(props) {
  if (props.pizzaObj.soldOut) {
    return (
      <div className={"pizza sold-out"}>
        <img src={props.pizzaObj.photoName} alt={props.name}></img>
        <div>
          <h3>{props.pizzaObj.name}</h3>
          <p>SOLD OUT</p>
          <span>${props.pizzaObj.price}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={"pizza"}>
      <img src={props.pizzaObj.photoName} alt={props.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>${props.pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 2;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          {" "}
          We are happy to welcome you between {openHour}:00 - {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00 | Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// App

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// Before React v18 (a.k.a. React 17)
// ReactDOM.render(<App />, document.getElementById("root"));
// React v18
// React version 18 how we render our app in the dom using a root element.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Strict mode double compiles components to find bugs and outdated libraries so good practice to use.
