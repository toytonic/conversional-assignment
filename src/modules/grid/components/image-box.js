import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  width: 49%;
  height: 250px;
  background-image: url("${({ background }) => background}");
  display: flex; 
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 50px;
`;

const Headline = styled.h2`
  color: white;
  text-align: center;
`;

const TeaserText = styled.span`
  color: white;
`;

const TeaserLink = styled.a`
  font-style: italic;
  text-decoration: none;
  color: white;
`;

const TeaserContainer = styled.p``;

export const ImageBox = ({ id, title, teaser, link, background, onSelect }) => {
  return (
    <Container background={background}>
      <Headline>{title}</Headline>
      <TeaserContainer>
        <TeaserText>{teaser}</TeaserText>
        <TeaserLink
          onClick={event => {
            event.preventDefault();
            onSelect(id);
          }}
        >
          {link}
        </TeaserLink>
      </TeaserContainer>
    </Container>
  );
};
