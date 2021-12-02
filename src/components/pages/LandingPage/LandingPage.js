import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const LandingPage = () => {
  return(
    <StyledButton>Primary</StyledButton>
  )
}

const StyledButton = styled(Button)`
  color: ${props => props.theme.colors.neutralWhite} !important;
  background-color: ${props => props.theme.colors.wildWaterMelon} !important;
`;

export default LandingPage;