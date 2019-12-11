import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = (props) => {
  return props.shouldShowMore && <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={()=>props.onShowMoreBtnClick()}>Show more</button>
  </div>;
};

ShowMore.propTypes = {
  onShowMoreBtnClick: PropTypes.func.isRequired,
  shouldShowMore: PropTypes.bool.isRequired,
};

export {ShowMore};
