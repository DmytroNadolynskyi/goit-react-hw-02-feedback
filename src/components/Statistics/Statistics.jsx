import PropTypes from 'prop-types';
import { List, Value, Total } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <List>
      <Value>Good: {good}</Value>
      <Value>Neutral: {neutral}</Value>
      <Value>Bad: {bad}</Value>
      <Total>Total: {total}</Total>
      <Total>Positive: {positive}%</Total>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
