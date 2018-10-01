import React from 'react';
import styled from 'styled-components';
import { NavItem } from './components/nav-item';

const Container = styled.div``;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;

export const renderNavItem = (key, data, selected, onSelect) => {
  return (
    <NavItem
      key={key}
      selected={selected}
      title={data.value.headline}
      onSelect={() => onSelect(key)}
    />
  );
};

export const ModalHeader = ({
  data,
  selectedContentId,
  onNavSelect,
  onClose
}) => {
  return (
    <Container>
      <NavigationContainer>
        {Object.keys(data).map(key =>
          renderNavItem(
            key,
            data[key].Content,
            selectedContentId === key,
            onNavSelect
          )
        )}
      </NavigationContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
    </Container>
  );
};
