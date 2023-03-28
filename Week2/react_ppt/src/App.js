import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import element from './latihan/slide22';
import getGreeting from './latihan/slide23';
import element2 from './latihan/slide24';

class App extends React.Component {
  menus = [
    { id: 1, name: 'Slide 22', link: '/slide-22' },
    { id: 2, name: 'Slide 23', link: '/slide-23' },
    { id: 3, name: 'Slide 24', link: '/slide-24' },
  ]

  renderSwitch = (param) => {
    switch (param) {
      case '/slide-22':
        return <div>{element}</div>;
      case '/slide-23':
        return <div>{getGreeting({ firstName: 'Budi', lastName: 'Santoso' })}</div>;
      case '/slide-24':
        return <div>{element2}</div>;
      default:
        return (
          this.menus.map((menu) => (
            <a key={menu.id} href={menu.link} style={{
              display: 'block',
              padding: '10px',
              backgroundColor: 'green',
              color: 'white',
              textDecoration: 'none',
              marginBottom: '10px',
              textAlign: 'center',
            }}>{menu.name}</a>

          ))
        )
    }
  }

  render() {
    return (
      <div>
        {this.renderSwitch(window.location.pathname)}
      </div>
    );
  }
}

export default App;
