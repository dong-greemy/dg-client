import { css } from 'styled-components';
import media from './media';

const typography = {
  // Display font styles
  display1: css`
    font-size: 50px;
    font-weight: bold;
    line-height: 150%;

    /* desktopp 가이드가 나올시
    * ${media.desktop` font-size: 0px; `}
    */
  `,

  display2: css`
    font-size: 40px;
    font-weight: bold;
    line-height: 150%;
  `,

  // Headline font styles
  headline1: css`
    font-size: 32px;
    font-weight: bold;
    line-height: 150%;
  `,

  headline2: css`
    font-size: 26px;
    font-weight: bold;
    line-height: 150%;
  `,

  // Title font styles
  title1: css`
    font-size: 20px;
    font-weight: bold;
    line-height: 150%;
  `,

  title2: css`
    font-size: 18px;
    font-weight: bold;
    line-height: 150%;
  `,

  title3: css`
    font-size: 16px;
    font-weight: bold;
    line-height: 150%;
  `,

  // Body font styles
  body1: css`
    font-size: 18px;
    font-weight: normal;
    line-height: 150%;
  `,

  body2: css`
    font-size: 16px;
    font-weight: normal;
    line-height: 150%;
  `,

  body3: css`
    font-size: 14px;
    font-weight: normal;
    line-height: 150%;
  `,

  // Caption font styles
  caption1: css`
    font-size: 12px;
    font-weight: normal;
    line-height: 150%;
  `,
};

export default typography;
