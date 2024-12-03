'use client';

import styled from 'styled-components';

import { contents_box, flex_column, header_height, borderless } from 'styles/common';
import typography from 'styles/typography';

export const Main = styled.main`
  ${flex_column};
  padding-top: ${header_height};
  height: 100vh;
  padding-bottom: 70px;
  background-color: white;
`;

export const HomeContainer = styled.div`
  height: 100%;
  background-color: white;
  padding: 16px 20px;
`;

export const CommuteTime = styled.div`
  ${contents_box};
  margin-top: 14px;
  border-radius: 8px;

  > .commute-time-wrapper {
    ${typography.headline3}
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #25282b;

    > .select-time-title {
      display: flex;
      gap: 6px;
    }
  }
`;

export const CommuteTimeSelect = styled.button`
  ${borderless}
  ${typography.headline3}
  display: flex;
  align-items: center;
  font-family: inherit;
  background-color: unset;
  border-bottom: 1.5px solid #25282b;
  padding-left: 6px;
  cursor: pointer;
`;

export const HomeFooter = styled.footer`
  position: fixed;
  background-color: white;
  width: 100%;
  bottom: 0;
  padding: 8px 20px 12px 20px;
`;

export const BottomSheet = styled.div`
  position: absolute;
`;
