import PropTypes from 'prop-types';
import { ComSection, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      <ComSection>
        <Title>{title}</Title>
        {children}
      </ComSection>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section