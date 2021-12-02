const colors = {
  neutralWhite: "#ffffff",
  brightGrey: "#EEEEEE",
  fauxDarkPurple: "#2F1A35",
  greySuit: "#9099A4",
  wildWaterMelon: "#FF5976",
  wePeep: "#FDDBDB",
};

const htmlFontSize = 16;

export const theme = {
  colors,
  fonts: ["sans-serif", "Inter"],
  fontSizes: {
    xxl: '2.25rem', // 36px
    xl: '2rem', // 32px
    l: '1.5rem', // 24px
    m: '1.125rem', // 18px
    s: '1rem', // 16px
    xs: '0.875rem', // 14px
    xxs: '0.75rem', // 12px
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  pxToRem: (px) => `${px / htmlFontSize}rem`,
};