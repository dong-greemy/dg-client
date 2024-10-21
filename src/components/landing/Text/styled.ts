'use client';

import styled from 'styled-components';

import typography from '@styles/typography';
import { borderless } from '@styles/common';

interface LandingTextProps {
  size?: 'h1' | 'h2' | 't1';
}

export const LandingText = styled.div<LandingTextProps>`
 ${borderless}
  width: 100%; 
  height: fit-content;
  text-align: center;
  > .title {
   ${props => {
     if (props.size === 'h1') return typography.headline1;
     if (props.size === 'h2') return typography.headline2;
     if (props.size === 't1') return typography.title1;
     return typography.body1;
   }}
   color: ${props => {
     if (!props.size) return 'rgba(0, 0, 0, 0.60)';
   }}
`;
