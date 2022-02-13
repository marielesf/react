import React, { Component } from "react";

class AppArrow extends Component {
  showMessage = (telegrama) => {
    return telegrama;
  };

  dobrarNumero = (numero) => {
    return numero * 2;
  };

  render() {
    return (
      <div>
        <h1>Prática React 04</h1>
        <h2>Exercicio arrow function com class component </h2>

        <p>
          Seu Telegrama: {this.showMessage("Que você tenha um dia Abencoado!")}
        </p>

        <p>Dobro: {this.dobrarNumero(10)}</p>
      </div>
    );
  }
}

export default AppArrow;
