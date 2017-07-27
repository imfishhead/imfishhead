import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';
import IntroBlock from '../IntroBlock';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <IntroBlock>

        </IntroBlock>
      </div>
    );
  }
}

export default App;
