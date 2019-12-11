import React from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {Logo} from 'components/logo/logo';
import {UserBlock} from 'components/user-block/user-block';
import {Operation} from '../../reducers/actions-async';

const AddCommentBlock = (props) => {
  const {isDisable, isAuthorizationRequired, avatar, successComment} = props;
  const paramsId = props.match.params.id;
  const {backgroundColor, backgroundImage, title, poster} = props.currentFilm;

  const handleFormSubmit = (comment, rating, filmId) => {
    const review = {
      rating,
      comment
    };
    props.postComment(review, filmId);
  };

  const checkNumberSymbols = (evt) => {
    if (evt.target.value.length < 50) {
      props.unDisableBtn(true);
    }

    if (evt.target.value.length > 50) {
      props.unDisableBtn(false);
    }

    if (evt.target.value.length > 400) {
      props.unDisableBtn(true);
    }
  };

  const renderCommentBlock = () => {
    return !successComment ?
      <section className="movie-card movie-card--full" style={{background: `${backgroundColor}`}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title}/>
          </div>

          <header className="page-header">
            <Logo/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${paramsId}`} className="breadcrumbs__link">{title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock
              isAuthorizationRequired={isAuthorizationRequired}
              avatar={avatar}
            />
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={poster} alt={`${title} poster`} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={(evt) => {
            evt.preventDefault();
            const data = new FormData(evt.currentTarget);
            handleFormSubmit(data.get(`review-text`), data.get(`rating`), paramsId);
          }}>
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked/>
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={checkNumberSymbols}></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={isDisable} style={isDisable ? {opacity: 0.5} : {opacity: 1}}>Post</button>
              </div>

            </div>
          </form>
        </div>

      </section> : <Redirect to={`/films/${paramsId}`}></Redirect>;
  };

  if (props.currentFilm !== undefined) {
    return renderCommentBlock();
  }
  return null;
};

AddCommentBlock.propTypes = {
  successComment: PropTypes.bool.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  isDisable: PropTypes.bool.isRequired,
  currentFilm: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
      videoLink: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      runTime: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.arrayOf(PropTypes.string).isRequired,
      isFavorite: PropTypes.bool.isRequired,
    }),
  ]).isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.isAuthorizationRequired,
  avatar: state.avatarUrl,
  successComment: state.isPostComment,
  currentFilm: state.currentFilm
});

const mapDispatchToProps = (dispatch) => ({
  postComment: (data, id) => {
    dispatch(Operation.postComment(data, id));
  },
});

export {AddCommentBlock};
export default connect(mapStateToProps, mapDispatchToProps)(AddCommentBlock);
