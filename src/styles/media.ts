'use client';

import { CSSObject, Interpolation, css } from 'styled-components';

export type Breakpoints = 'mobile' | 'desktop';

export const breakpoints: Record<Breakpoints, string> = {
  mobile: '@media (max-width: 768px)',
  desktop: '@media (min-width: 769px)',
};

const media = Object.entries(breakpoints).reduce(
  (acc, [key, value]) => {
    acc[key as Breakpoints] = (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `;
    return acc;
  },
  {} as Record<
    Breakpoints,
    (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => ReturnType<typeof css>
  >,
);

export default media;
