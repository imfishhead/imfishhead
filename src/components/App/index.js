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
        <Section title="EDUCATION">
          <Education>
          </Education>
        </Section>
        <Section title="WORK EXPERIENCE">
          <WorkExperience
            title="Backer-Founder"
            description="Asia's leading crowdfunding consulting agency based in Taiwan that has lead more than 300 campaigns and raised more than 600 million US dollars."
            duration="09/2015 – 08/2017"
            location="Taipei, Taiwan">
            <p>Developing and maintaining features on Backme, a crowdfunding tool that raised over 9 million USD with 140,000+ users and held 500+ projects. Backme consists of 25,000 lines of ruby codes and nearly 15,000 lines of javascript.</p>
            <p>Constructed full-featured (with the combination of 100+ features) admin system for Backme to substitute former admin panel produced by Active Admin. Reducing the number of necessary steps to build a project from 10 to 3 and raising user satisfaction.</p>
            <p>Developed various e-commerce/crowdfunding features for Backme - delivery notification system, coupon code system for pre-campaigns, customized progress bar for embedding on websites, project management system etc.</p>
            <p>Build RESTful APIs</p>
            <p>Developed promotion tracking system with shortening url feature, combining Google's UTM tracking feature. Built graphs to show clicks and money brought by each shortened url.</p>
            <p>Implemented unit tests and feature tests using RSpec and Capybara.</p>
            <p>Built campaign page of Implosion: Zero Day, with page views of 13,000+ at highest, which brought $428,853 USD to the campaign, with 1,670 backers on Kickstarter.</p>
            <p>Built Crowdfunding Annual Report of 2015 with 4,600+ shares.</p>
          </WorkExperience>
          <WorkExperience
            title="Cowell"
            description="Cowell is a MIS company for Tourism Industry based in Taiwan, since 1988."
            duration="07/2014 – 08/2014"
            location="Taipei, Taiwan">
            <p>Implemented functions according to customer's needs using ASP.net</p>
            <p>Fixed issues</p>
          </WorkExperience>
        </Section>
        <Section title="ORGANIZATIONS">
          <Organization
            title="Calls Over Ridges"
            duration="01/2017 – Present"
            description="Built a website for supporters to sign up for the project, keep in touch with their supported kid and receive updates from Nepal.">
          </Organization>
          <Organization
            title="Marriage Equality Platform"
            duration="11/2016 – Present"
            description="Built a website for NPO that is pursuing to fix the law for gay marriage in Taiwan, aiming to share correct knowledge about gay marriage.">
          </Organization>
        </Section>
        <Section title="AWARDS">
          <Award
            title="HackEasy.life Hackathon - Second Place Prize"
            held_by="Gandi.net"
            description="A chatbot shopping system named EchoBuy that surveys your shopping needs, get recommendation from your friends then allows you to checkout items directly all inside the chatroom.">
          </Award>
          <Award
            title="Marriage Equality Platform"
            held_by="Booking.com"
            description="An app that analyzes your Instagram likes, run through Flickr photos to recommend you a place to start traveling, along with integration of Booking.com and Skyscanner API to recommend plane tickets to buy and places to stay.">
          </Award>
        </Section>
      </div>
    );
  }
}

export default App;
