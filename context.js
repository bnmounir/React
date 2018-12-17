import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Bob Mill",
        email: "bm@gmail.com",
        phone: "333-333-3333"
      },
      {
        id: 2,
        name: "Crazy Dog",
        email: "cd@gmail.com",
        phone: "555-000-0000"
      },
      {
        id: 3,
        name: "Big Head",
        email: "bh@gmail.com",
        phone: "111-111-4444"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.childern}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
