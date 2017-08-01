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
        <h1>WORK EXPERIENCE</h1>
        <h2>{this.props.company}</h2>
        <h3 className="description-of-company">{this.props.company_description}</h3>
        <p className="duration">{this.props.duration}</p>
        <p className="location">{this.props.location}</p>
        <div className="experience-list">{this.props.children}</div>
      </div>
    );
  }
}
