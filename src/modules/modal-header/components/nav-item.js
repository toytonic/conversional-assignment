import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
    font-size: 18px;
    color: ${({selected}) => selected ? 'red' : 'inherit'};
    text-decoration: ${({selected}) => selected ? 'underline' : 'none'};
    padding: 20px;
`;

export const NavItem = ({ selected, title, onSelect }) => {
  return (
    <Container
        selected={selected}
      onClick={event => {
        event.preventDefault();
        onSelect();
      }}
    >
      {title}
    </Container>
  );
};
