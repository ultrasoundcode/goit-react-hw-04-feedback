import PropTypes from 'prop-types';
import { List, ListItem, Button } from './FeedBack.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option, index) => (
        <ListItem key={index}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </ListItem>
      ))}
    </List>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
