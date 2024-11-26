'use client';

// import dynamic from 'next/dynamic';
import Select from 'react-select';
import styled from 'styled-components';

import { contents_box, flex_column, header_padding } from '@styles/common';
import typography from '@styles/typography';

export const Main = styled.main`
  ${flex_column};
  ${header_padding};
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
    margin-bottom: 18px;

    > .select-time-title {
      display: flex;
      gap: 10px;
    }
  }
`;

export const CommuteTimeSelect = styled(Select)`
  & .CommuteTimeSelect {
    &__control {
      border: unset;
      border-radius: unset;
      border-bottom: 1.5px solid #25282b;
      min-height: 33px;

      &--is-focused {
        box-shadow: none;
      }

      &:hover {
        border-color: unset;
      }
    }

    &__value-container {
      padding: unset;
    }

    &__dropdown-indicator {
      padding: unset;
    }

    &__menu {
      font-size: 20px;

      &-list {
        padding: 0;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const CommuteMethodGroup = styled.fieldset``;

export const CommuteMethod = styled.input``;

export const HomeFooter = styled.footer`
  position: fixed;
  background-color: white;
  width: 100%;
  bottom: 0;
  padding: 8px 20px 12px 20px;
`;
