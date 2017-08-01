import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Section extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Section', className)} {...props}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}