import React, { Component } from "react";

class AppMap extends Component {
  state = [
    {
      title: "Brigadeiro",
      ingredients: ["margarina", "achocolatado", "leite condensado"],
    },
    {
      title: "Pão assado",
      ingredients: ["pão", "margarina"],
    },
    {
      title: "Churrasco",
      ingredients: [
        "Salsichão",
        "cochinha de frango",
        "coração de frango",
        "picanha",
        "pão de alho",
      ],
    },
    {
      title: "maionese",
      ingredients: ["batata", "ovo", "oleo"],
    },
    {
      title: "suco de laranja",
      ingredients: ["agua", "laranja"],
    },
    {
      title: "miojo",
      ingredients: ["agua", "nissin"],
    },
  ];
  render() {
    return (
      <div>
        <h1>Prática React 05 - Map()</h1>
        <h3>
          {this.state.map((item) => (
            <p>
              Nome: {item.title} <br />
              Ingredimentes: {item.ingredients}
            </p>
          ))}
        </h3>
      </div>
    );
  }
}

export default AppMap;
