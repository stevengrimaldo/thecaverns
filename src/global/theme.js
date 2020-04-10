const baseColors = {
  black: '#000000',
  transparent: 'transparent',
  white: '#ffffff',
}

export const color = {
  ...baseColors,
}

export const fontFamily = {
  caecilia: "'Caecilia', 'Times New Roman', serif",
  myriad: "'Myriad', 'Arial', sans-serif",
}

export const fontWeight = {
  black: '900', // available in: Myriad
  bold: '700', // available in: Caecilia, Myriad
  light: '300', // available in: Caecilia
  regular: '400', // available in: Caecilia, Myriad
  semiBold: '600', // available in: Myriad
}

export const fontStyle = {
  italic: 'italic', // available in: Myriad
  normal: 'normal', // available in: Caecilia, Myriad
}

export const fontSize = {
  button: '16px',
  h1: '64px',
  h2: '48px',
  h3: '36px',
  h4: '30px',
  h5: '24px',
  h6: '20px',
  p: '16px',
  specChar: '50%',
}

export const lineHeight = {
  button: '18px',
  h1: '68px',
  h2: '52px',
  h3: '42px',
  h4: '36px',
  h5: '28px',
  h6: '22px',
  p: '24px',
  specChar: '1',
}

export const letterSpacing = {
  button: '1.69px',
  h1: '-1px',
  h2: '-1px',
  h3: '-1px',
  h4: '0',
  h5: '0.9px',
  h6: '0.2px',
  p: '0',
  specChar: '0',
}

export const textTransform = {
  button: 'uppercase',
  h1: 'none',
  h2: 'none',
  h3: 'none',
  h4: 'none',
  h5: 'none',
  h6: 'none',
  p: 'none',
  specChar: 'none',
}

export const spacing = {
  horizontalPadding: '20px',
  verticalPadding: '80px',
  verticalPaddingHalf: '40px',
}

export const timing = {
  default: '400ms',
  fast: '200ms',
  slow: '800ms',
}

export const easing = {
  ease: 'ease',
  easeIn: 'ease-in',
  easeInOut: 'ease-in-out',
  easeOut: 'ease-out',
  linear: 'linear',
}

export const type = {
  button: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.button}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.bold}`,
    letterSpacing: `${letterSpacing.button}`,
    lineHeight: `${lineHeight.button}`,
    textTransform: `${textTransform.button}`,
  },
  h1: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.pageTitle}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.bold}`,
    letterSpacing: `${letterSpacing.pageTitle}`,
    lineHeight: `${lineHeight.pageTitle}`,
    textTransform: `${textTransform.pageTitle}`,
  },
  h2: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.mainHeadline}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.bold}`,
    letterSpacing: `${letterSpacing.mainHeadline}`,
    lineHeight: `${lineHeight.mainHeadline}`,
    textTransform: `${textTransform.mainHeadline}`,
  },
  h3: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.headline}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.bold}`,
    letterSpacing: `${letterSpacing.headline}`,
    lineHeight: `${lineHeight.headline}`,
    textTransform: `${textTransform.headline}`,
  },
  h4: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.subHeadline}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.bold}`,
    letterSpacing: `${letterSpacing.subHeadline}`,
    lineHeight: `${lineHeight.subHeadline}`,
    textTransform: `${textTransform.subHeadline}`,
  },
  h5: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.callout}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.semiBold}`,
    letterSpacing: `${letterSpacing.callout}`,
    lineHeight: `${lineHeight.callout}`,
    textTransform: `${textTransform.callout}`,
  },
  h6: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.featured}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.semiBold}`,
    letterSpacing: `${letterSpacing.featured}`,
    lineHeight: `${lineHeight.featured}`,
    textTransform: `${textTransform.featured}`,
  },
  p: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.body}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.regular}`,
    letterSpacing: `${letterSpacing.body}`,
    lineHeight: `${lineHeight.body}`,
    textTransform: `${textTransform.body}`,
  },
}

export default {
  color,
}
