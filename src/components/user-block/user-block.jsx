import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserBlock = (props) => {
  return <div className="user-block">
    {props.isAuthorizationRequired ? <Link to="/login" className="user-block__link">Sign In</Link> : <Link to="/mylist" className="user-block__avatar"><img src={`https://htmlacademy-react-2.appspot.com/${props.avatar}`} alt="User avatar" width="63" height="63"/></Link>}
  </div>;
};

UserBlock.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

export {UserBlock};
