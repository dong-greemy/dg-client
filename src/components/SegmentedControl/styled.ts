import styled from 'styled-components';

import { borderless, prevent_click_box } from 'styles/common';
import theme from 'styles/theme';

export const SegmentedControl = styled.div`
  display: flex;
`;
export const SegmentOption = styled.button<{ $isSelected?: boolean }>`
  ${({ $isSelected }) => ($isSelected ? theme.typography.title3 : theme.typography.body2)}
  ${borderless};
  ${prevent_click_box};
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ $isSelected }) => ($isSelected ? '#f4f5f6' : 'unset')};
  padding: 6px 12px;
  border-radius: 100px;
  cursor: pointer;
  color: ${({ $isSelected }) => ($isSelected ? theme.colors.primary : 'inherit')};

  > span {
    text-wrap: nowrap;
  }
`;

export const SegmentOptionIcon = styled.span<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;

  > svg {
    fill: ${({ $isSelected }) => ($isSelected ? theme.colors.primary : '#25282B')};
  }
`;
