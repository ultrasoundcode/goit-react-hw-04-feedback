import { useState } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Feedback } from './components/Feedback/Feedback';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';
import { Section } from './components/Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };
  // const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  // const onLeaveFeedback = type => {
  //   setFeedback(prevFeedback => ({
  //     ...prevFeedback,
  //     [type]: prevFeedback[type] + 1,
  //   }));
  // };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <GlobalStyle />
      <Section title="Please leave your feedback">
        <Feedback
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
