import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <span>Hello world</span>
    );
  }
}
export default HelloWorld;

const wrapper = document.getElementById('hello-world');
wrapper ? ReactDOM.render(<HelloWorld />, wrapper) : false;
