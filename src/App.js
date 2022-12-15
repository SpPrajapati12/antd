import 'antd/dist/antd.css';
import React, { Component } from "react";

import Root from './common/Root';
import { BrowserRouter, Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
  }
}
export default App;

