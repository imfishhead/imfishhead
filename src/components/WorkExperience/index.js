import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class WorkExperience extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('WorkExperience', className)} {...props}>
        <h2>{this.props.title}</h2>
        <h3 className="description description-of-company">{this.props.description}</h3>
        <p className="duration">{this.props.duration}</p>
        <p className="location">{this.props.location}</p>
        <div className="experience-list">{this.props.children}</div>
      </div>
    );
  }
}
