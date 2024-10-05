'use client';

import styled from 'styled-components';
import Link from 'next/link';
import typography from '@styles/typography';
import { flex_center, flex_column, prevent_click_box } from '@styles/common';

export const DefaultButton = styled.button`
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  > .button-title {
    ${typography.title1}
  }
`;
