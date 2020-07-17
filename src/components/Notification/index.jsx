import React from 'react';
import PropTypes from 'prop-types';
import SuccessIcon from '../../assets/icons/success.svg';
import './styles.css';

const Notification = ({ show, children }) => (
  <div className={`notification ${show ? '' : 'hide'}`}>
    <div className="icon">
      <SuccessIcon width="32px" height="32px" fill="#fff" />
    </div>
    <p className="text no-margin">{children}</p>
  </div>
);

Notification.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default Notification;
