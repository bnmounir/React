import React, { Component } from 'react';
import './App.css';

const ListItem = ({ text }) => {
  return <li>{text}</li>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos, newTodo: '' });
  }
  render() {
    const { newTodo } = this.state;
    const todos = this.state.todos.map((t, i) => <ListItem key={i} text={t} />);

    return (
      <div className='App'>
        <h1>Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            autoComplete='off'
            type='text'
            name='newTodo'
            value={newTodo}
            onChange={e => {
              this.setState({ [e.target.name]: e.target.value });
            }}
          />
          <button type='submit'>Add ToDo</button>
        </form>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default App;
