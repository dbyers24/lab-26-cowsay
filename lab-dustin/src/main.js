import cowsay from 'cowsay-browser';
import faker from 'faker';
import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render()
  {
    return (
      <header className='navbar'>
      <h3> Generate Cowsay Lorem </h3>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => {
      return {
        content : cowsay.say({
    	  text : faker.hacker.phrase(),
    	  e : "oO",
    	  T : "U "
      })
      }
    })
  }
  render() {
    return (
      <div>
        <Navbar / >
        <p>{this.state.title}</p>
        <pre>{this.state.content}</pre>
        <button onClick={this.handleClick}> Click MOOOOOOOOO! </button>
        <p>{this.state.sentence}</p>
      </div>
    );
  };
};

ReactDom.render(<App />, document.getElementById('root'))
