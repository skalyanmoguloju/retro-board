
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Base from 'terra-base';
import FunRetroContainer from './FunRetroContainer';


class Main extends React.Component {
  render() {
    return (
      <Base className="custom-App" locale="en">
        <BrowserRouter>
          <Route path="/" component={FunRetroContainer}/>
        </BrowserRouter>
      </Base>
    )
  }
}

export default Main;