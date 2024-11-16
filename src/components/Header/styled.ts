'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { flex_center, prevent_click_box } from '@styles/common';
import typography from '@styles/typography';

export const HeaderLogo = styled(Link)`
  ${prevent_click_box};
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: unset;

  span.logoText {
    ${typography.title2}
    text-decoration: unset;
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
  background-color: white;
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
  background-color: white;
  padding: 12px 20px;
`;
