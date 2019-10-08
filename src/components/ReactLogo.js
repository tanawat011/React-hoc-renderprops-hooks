import React from 'react';
import styled from 'styled-components';

import logo from '../logo.svg';

const ReactLogoStyled = styled.img`
  height: 40vmin;
`;

const ReactLogo = () => {
  return <ReactLogoStyled src={logo} alt="logo" />;
};

export default ReactLogo;
