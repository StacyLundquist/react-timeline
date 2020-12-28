import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  
  return (
    <div className="timeline-event">
      <ul className="event-person"> {props.person} </ul>
      <ul className="event-status"> {props.status} </ul>
      < ul className="event-time"> 
        < Timestamp time = {props.timeStamp}/>
      </ul >
    </div>
  );
};

  TimelineEvent.propTypes = {
    person: PropTypes.string.isRequired,
    status: PropTypes.string,
    timestamp: PropTypes.instanceOf(Timestamp)
  };

export default TimelineEvent;