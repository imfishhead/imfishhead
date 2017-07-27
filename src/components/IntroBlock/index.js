import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class IntroBlock extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('IntroBlock', className)} {...props}>
        <div className="IntroBlock-header">
          <h2>{this.props.children}</h2>
        </div>
      </div>
    );
  }
}
