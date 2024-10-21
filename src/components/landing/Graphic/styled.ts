'use client';

import styled from 'styled-components';
import { borderless } from '@styles/common';

interface GraphicAreaProps {
  height?: '270px';
}

export const GraphicArea = styled.div<GraphicAreaProps>`
  ${borderless}
  padding-top: 32px;
  background: #d9d9d9;
  width: 100%;
  height: ${props => (props.height ? props.height : '280px')};
`;
