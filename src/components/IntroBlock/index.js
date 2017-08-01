import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import AdelePhoto from './resume-photo.jpg';
import './style.css';

export default class IntroBlock extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('IntroBlock', className)} {...props}>
        <div className="profile-img">
          <img src={AdelePhoto} />
        </div>
        <h2>Adele Yu</h2>
        <p>
          Aiming to use my abilities on both front and back end to develop user-friendly applications, <br/>
          I am a developer who's adept in communicating with users and co-workers.<br/>
          I love to help people achieve what they pursue and to feedback to the society.
        </p>
      </div>
    );
  }
}
