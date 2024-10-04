'use client';

import styled from 'styled-components';
import Link from 'next/link';
import typography from '@styles/typography';
import { contents_box, prevent_click_box } from '@styles/common';
export const AboutService = styled(Link)`
  ${contents_box};
  ${prevent_click_box};
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  text-decoration: unset;
`;

export const LearnMore = styled.div`
  display: flex;

  > .learn-more-text {
    ${typography.body3}
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 7px;
    color: #25282b;
  }
`;
