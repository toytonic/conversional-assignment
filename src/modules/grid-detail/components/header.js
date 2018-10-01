import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Headline = styled.h1``;

const Subheadline = styled.h2``;

export const Header = ({ headline, subheadline }) => {
  return (
    <Container>
      <Headline>{headline}</Headline>
      <Subheadline>{subheadline}</Subheadline>
    </Container>
  );
};
