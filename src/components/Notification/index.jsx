import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import SuccessIcon from '../../assets/icons/success.svg';
import './styles.css';

const Notification = ({ show, children }) => (
  <CSSTransitionGroup
    transitionName="notification"
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}
  >
    {show && (
      <div className="notification">
        <div className="icon">
          <SuccessIcon width="32px" height="32px" fill="#fff" />
        </div>
        <p className="text no-margin">{children}</p>
      </div>
    )}
  </CSSTransitionGroup>
);

Notification.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default Notification;
