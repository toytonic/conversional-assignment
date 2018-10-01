import React from 'react';
import styled from 'styled-components';
import { ButtonBox } from './components/button-box';
import { ImageBox } from './components/image-box';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background: gray;
`;

const renderItem = (key, data, onSelect) => {
  const { Content: content } = data;

  switch (content.type) {
    case 'ButtonBox': {
      return <ButtonBox id={key} key={key} {...content.value} />;
    }
    case 'ImageBox': {
      return (
        <ImageBox id={key} key={key} {...content.value} onSelect={onSelect} />
      );
    }
    default:
      return null;
  }
};

export const Grid = ({ data, onItemSelect }) => {
  return (
    <Container>
      {Object.keys(data.Children).map(key =>
        renderItem(key, data.Children[key], onItemSelect)
      )}
    </Container>
  );
};
