import styled from 'styled-components';

import color from 'styles/color';
import { borderless, flex_column, header_height } from 'styles/common';
import typography from 'styles/typography';

export const Main = styled.main`
  ${flex_column};
  padding-top: ${header_height};
  height: 100vh;
  background-color: white;
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 0.75rem 1rem;
  box-shadow: inset 0 -1px 0 #e0e2e4;

  > div:first-child {
    min-width: 200px;
  }
`;

export const Map = styled.div`
  height: 240px;
  background-color: black;
`;

export const RecommendPlaceWrapper = styled.div``;

export const RecommendPlace = styled.button`
  ${borderless};
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 0.75rem 1.25rem;
  box-shadow: inset 0 -1px 0 #e0e2e4;

  &:active {
    background-color: #1ca1ff19;
  }
`;

export const RecommendPlaceData = styled.div`
  ${flex_column};
  justify-content: space-between;
  align-items: flex-start;

  .tag {
    ${typography.body3};
    color: ${color.primary};
    font-weight: 600;
  }

  .place {
    ${typography.title2};
    color: #25282b;
  }

  .averageMonthlyRent {
    ${typography.body2};
    color: #6d757e;
  }
`;

export const RecommendPlaceTime = styled.div`
  ${flex_column};
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2px;

  .time {
    display: flex;
    align-items: center;
    gap: 3px;
    ${typography.title1};
    color: #25282b;
  }

  .transfer {
    ${typography.body3};
    color: #a2a8af;
  }
`;
