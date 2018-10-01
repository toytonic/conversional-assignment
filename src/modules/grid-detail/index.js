import React from 'react';
import styled from 'styled-components';
import { Header } from './components/header';
import { BulletPoint } from './components/bullet-point';

const Container = styled.div``;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const KeyVisual = styled.img``;

const ListContainer = styled.ul``;

export const GridDetail = ({ headline, subheadline, image, list }) => {
  return (
    <Container>
      <Header headline={headline} subheadline={subheadline} />
      <ContentContainer>
        <KeyVisual src={image} />
        <ListContainer>
          {list.map((item, index) => (
            <BulletPoint key={index} label={item} />
          ))}
        </ListContainer>
      </ContentContainer>
    </Container>
  );
};
