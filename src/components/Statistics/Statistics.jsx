import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={css.good}>
        Good: <span className={css.numbers}>{good}</span>
      </p>
      <p className={css.neutral}>
        Neutral: <span className={css.numbers}>{neutral}</span>
      </p>
      <p className={css.bad}>
        Bad: <span className={css.numbers}>{bad}</span>
      </p>
      <p>
        Total: <span className={css.numbers}>{total}</span>
      </p>
      <p className={css.good}>
        Positive feedback:{' '}
        <span className={css.numbers}>{positivePercentage()}</span>%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};