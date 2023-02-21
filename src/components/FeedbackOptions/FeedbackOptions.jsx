import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ updateState }) => {
  return (
    <div className={css.wrap}>
      <button
        className={css.butGood}
        onClick={() => {
          updateState('good');
        }}
      >
        Good
      </button>
      <button
        className={css.butNeut}
        onClick={() => {
          updateState('neutral');
        }}
      >
        Neutral
      </button>
      <button
        className={css.butBad}
        onClick={() => {
          updateState('bad');
        }}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  updateState: PropTypes.func.isRequired
};