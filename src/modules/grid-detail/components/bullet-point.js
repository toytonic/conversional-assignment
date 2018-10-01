import React from 'react';
import styled from 'styled-components';

const Container = styled.li``;

export const BulletPoint = ({ label }) => {
  return <Container>{label}</Container>;
};
