import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Education extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Education', className)} {...props}>
        <h2>Information Management</h2>
        <h2>National Taiwan University of Business</h2>
        <p className="duration">09/2010 – 06/2015</p>
      </div>
    );
  }
}
