

export const Feedback = ({ state, updateState}) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button
        onClick={() => {
          updateState('good');
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateState('neutral');
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateState('bad');
        }}
      >
        Bad
      </button>
      <p>Statistics</p>
      <p>
        Good: <span>{state.good}</span>
      </p>
      <p>
        Neutral: <span>{state.neutral}</span>
      </p>
      <p>
        Bad: <span>{state.bad}</span>
      </p>
      <p>
        Positive feedback: <span>
          {Math.floor((state.good / (state.good + state.neutral + state.bad)) * 100) || 0}%
        </span>
      </p>
    </div>
  );
};