import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Award extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Award', className)} {...props}>
        <h2>{this.props.title}</h2>
        <h3 className="description description-of-award">{this.props.description}</h3>
        <p className="heldBy">{this.props.heldBy}</p>
        <div className="experience-list">{this.props.children}</div>
      </div>
    );
  }
}
