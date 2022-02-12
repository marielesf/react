import React, { Component } from "react";

class App extends Component {
  state = {
    nome: "Sandra",
    idade: 20,
    comida: "Lasanha",
    musica: ["help", "Malvadao 3", "Uma linda mulher"],
  };
  render() {
    return (
      <div>
        <h1>{this.state.nome} </h1>
        <h2>{this.state.idade} </h2>
        <h3>{this.state.comida} </h3>
        <ol>
          <li>{this.state.musica[0]} </li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>
        </ol>
      </div>
    );
  }
}

export default App;
