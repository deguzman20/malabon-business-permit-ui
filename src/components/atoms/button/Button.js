import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { default as Btn } from '@mui/material/Button';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, label, ...props }) => {
  return (
    <StyledButton 
      primary={primary}
      // onClick={props.onClick}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled(Btn)`
  color: green;
  ${props => {
    console.log(props.theme)
  }}
`;

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  label: 'Button',
  onClick: undefined,
};
