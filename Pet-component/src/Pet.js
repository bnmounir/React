import React, { Component } from 'react';
import './Pet.css';

class Hobbies extends Component {
  render() {
    const liStyle = { fontSize: '1.5em' };
    const hobbies = ['Sleeping', 'Eating', 'Cuddling'];
    return (
      <div>
        <h5 style={{ fontSize: '2em', margin: '2px' }}>Hobbies:</h5>
        <ul>
          {hobbies.map((h, i) => {
            return (
              <li key={i} style={liStyle}>
                {h}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class Pet extends Component {
  render() {
    return (
      <div className='card'>
        <h2 className='name'>Moxie</h2>
        <img
          src='https://github.com/tigarcia/Moxie/raw/master/moxie.png'
          alt='cat'
        />
        <Hobbies />
      </div>
    );
  }
}

export default Pet;
