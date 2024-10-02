'use client';

import styled from 'styled-components';
import Link from 'next/link';
import typography from '@styles/typography';
import { flex_center, flex_column } from '@styles/common';

export const HeaderLogo = styled(Link)`
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  span.logoText {
    ${typography.title2}
    text-decoration: none;
    color: black;
  }
`;

export const HeaderClose = styled.button`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
`;

export const HeaderBack = styled.button`
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
`;

export const HeaderPage = styled.div`
  ${typography.title1}
  ${flex_center}
  width: 100%;
  pointer-events: none;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 56px;
  background-color: #f1f1f1;
  padding: 12px 20px;
`;
