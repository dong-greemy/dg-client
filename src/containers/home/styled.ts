'use client';

import styled from 'styled-components';
import {
  contents_box,
  flex_column,
  header_padding,
  prevent_click_box,
} from '@styles/common';
import Link from 'next/link';
import typography from '@styles/typography';

export const Main = styled.main`
  ${flex_column};
  ${header_padding};
  height: 100vh;
  padding-bottom: 70px;
  background-color: #f1f1f1;
`;

export const HomeContainer = styled.div`
  height: 100%;
  background-color: #f1f1f1;
  padding: 16px 20px;
`;

export const SearchCompany = styled.div`
  ${contents_box};
  margin-top: 16px;
  padding: 29px 20px 25px 20px;
  border-radius: 8px;

  > .search-company-title {
    ${typography.title1}
    color: #25282B;
    margin-bottom: 18px;
  }

  > .search-wrapper {
    ${prevent_click_box};
    display: flex;
    gap: 12px;
    text-decoration: unset;
    padding: 12px;
    background-color: #f0f0f0;
    border-radius: 8px;

    > .search-company-text {
      ${typography.body2};
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const CommuteMethod = styled.div`
  ${contents_box};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 21px 16px 18px;
  margin-top: 12px;

  > .commute-method-title {
    ${typography.title1}
    color: #25282B;
  }

  > .commute-method-desc {
    ${typography.body2};
    color: rgba(37, 40, 43, 0.6);
  }
`;

export const HomeFooter = styled.footer`
  position: fixed;
  background-color: white;
  width: 100%;
  bottom: 0;
  padding: 8px 20px 12px 20px;
`;
