import { css } from 'styled-components';

export const HEADER_HEIGHT = 60;
export const SIDEBAR_WIDTH = 260;

export const theme = {
  colors: {
    primary: {
      light: '#7a94ff',
      base: '#2c1498',
      dark: '#0b0131',
    },
  },
  effects: {
    frostedGlass: css`
      background: rgba(255, 255, 255, 0.1);
      box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
    `,
    frostedGlassDark: css`
      background: rgba(0, 0, 0, 0.2);
      box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
    `,
  },
};
