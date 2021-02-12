import React from 'react';
import { Spin } from 'antd';
import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <Spin />
    </Container>
  );
}
