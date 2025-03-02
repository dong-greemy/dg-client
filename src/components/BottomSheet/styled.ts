import { motion } from 'framer-motion';
import styled from 'styled-components';

import colors from 'styles/color';
import { borderless } from 'styles/common';
import typography from 'styles/typography';

export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Sheet = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.white};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 1000;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 20px 20px 8px 20px;
`;

export const Title = styled.h3`
  ${typography.title1};
  width: 100%;
  text-align: start;
`;

export const CloseButton = styled.button`
  ${borderless};
  position: absolute;
  top: 24px;
  right: 20px;
  background-color: unset;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`;

export const Content = styled.ul<{ $col?: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.$col || 3}, 1fr);
  gap: 6px 8px;
  padding: 20px;
  overflow-y: auto;
  flex: 1;
  flex-wrap: wrap;
`;

export const Item = styled.button<{ $isSelected?: boolean }>`
  ${typography.body1};
  ${borderless};
  flex: 1;
  background-color: ${({ $isSelected }) => ($isSelected ? '#EEF6FF' : 'unset')};
  border: ${({ $isSelected }) =>
    $isSelected ? `1px solid ${colors.primary}` : '1px solid #e7e7e7'};
  font-family: inherit;
  cursor: pointer;
  padding: 0.625rem 1.25rem;
  border-radius: 10px;
  text-wrap: nowrap;
  color: ${({ $isSelected }) => ($isSelected ? colors.primary : 'inherit')};

  &:hover {
    background: #f1f1f1;
  }
`;

export const CheckIcon = styled.div<{ $isSelected?: boolean }>`
  color: ${({ $isSelected }) => ($isSelected ? colors.primary : 'rgba(0, 0, 0, 0)')};
`;

export const Tools = styled.div`
  background-color: white;
`;
