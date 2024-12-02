'use client';

import styled from 'styled-components';

import { flex_center, borderless } from 'styles/common';
import typography from 'styles/typography';

export const DefaultButton = styled.button`
  ${borderless}
  width: 100%;
  padding: 10px;

  > .button-title {
    ${typography.title1}
  }
`;

export const RoundedButton = styled.button`
  ${flex_center}
  ${borderless}
  padding: 8px;
  border-radius: 100px;
  background: #b4b4b4;

  > .button-title {
    ${typography.title2}
  }
`;
