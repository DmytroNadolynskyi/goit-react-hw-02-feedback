import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

 const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsArr = Object.keys(options);
  return (
    <>
      <List>
        {optionsArr.map(el => {
          return (
            <Button key={el} onClick={() => onLeaveFeedback(el)}>
              {el}
            </Button>
          );
        })}
      </List>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions