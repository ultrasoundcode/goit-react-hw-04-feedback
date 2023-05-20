import PropTypes from 'prop-types';
import { SectionStyle, H2 } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <H2>{title}</H2>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
