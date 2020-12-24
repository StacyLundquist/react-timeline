import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  
  
  
  return (
    <div>
      <li> {props.person} </li>
      <li> {props.status} </li>
      < li > 
        < Timestamp time = {props.timestamp}/>
      </li >
    </div>
  );

  // TimelineEvent.propTypes = {
  //   person: PropTypes.string.isRequired,
  //   status: PropTypes.string,
  //   timestamp: PropTypes.instanceOf(timestamp)
  // };
};

export default TimelineEvent;