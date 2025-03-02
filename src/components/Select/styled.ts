import styled from 'styled-components';

import { borderless } from 'styles/common';
import typography from 'styles/typography';

export const Select = styled.button`
  ${borderless};
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e0e2e4;
  border-radius: 6px;
  padding: 0.625rem;
  width: 100%;
  text-align: start;
  cursor: pointer;

  > div {
    display: flex;
    gap: 4px;
    flex: 1 1 auto;
    min-width: 0;

    > p {
      ${typography.body2};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
      min-width: 0;
    }
  }

  > svg {
    flex: 0 0 auto;
  }
`;
