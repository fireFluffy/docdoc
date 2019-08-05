// @flow

const phoneMask = {
  formatChars: {
    9: '[0-9]',
  },
  mask: '999 999-99-99',
  maskChar: 'x',
  permanents: [7, 10],
};

const phoneValidateMask = /^\d{3}\s\d{3}-\d{2}-\d{2}$/i;

export default phoneMask;
export { phoneValidateMask };
