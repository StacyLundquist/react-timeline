import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';


const Timeline = (props) => {
  const eventComponents = props.events.map((event, i) => {
    return (
      <li key={i}>
        < TimelineEvent person={event.person} status={event.status} timestamp={event.timestamp} />
      </li>
    );
  });

  return (
    <ul className="event-components">
      {eventComponents}
    </ul>
  );
};


// Timeline.propTypes = {
//   events: PropTypes.instanceOf(array)
// };

export default Timeline;