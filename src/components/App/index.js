import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';
import Section from '../Section';
import IntroBlock from '../IntroBlock';
import Education from '../Education';
import WorkExperience from '../WorkExperience';
import Organization from '../Organization';
import Award from '../Award';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <Section>
          <IntroBlock>
          </IntroBlock>
        </Section>
        <Section>
          <Education>
          </Education>
        </Section>
      </div>
    );
  }
}

export default App;
