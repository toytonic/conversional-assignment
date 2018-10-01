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
`;

const Button = styled.a`
  background: rgb(234, 15, 38);
  padding: 10px;
  min-width: 150px;
  display: block;
  color: white;
  text-decoration: none;
  text-align: center;
`;

export const ButtonBox = ({ title, link, background, url }) => {
  return (
    <Container background={background}>
      <Headline>{title}</Headline>
      <Button href={url}>{link}</Button>
    </Container>
  );
};
