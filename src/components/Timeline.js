import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';


const Timeline = (props) => {
  const eventComponents = props.events.map((event, i) => {
    return <TimelineEvent 
    key = {i} 
    person = {event.person} 
    status = {event.status}
    timestamp = {event.timeStamp} />
  });

  return (
    <ul className="timeline">
      {eventComponents}
    </ul>
  );
};


Timeline.propTypes = {
  events: PropTypes.array.isRequired
};

export default Timeline;