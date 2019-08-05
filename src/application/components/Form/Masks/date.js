// @flow

const dateMask = {
  formatChars: {
    1: '[0-3]',
    3: '[0-1]',
    5: '[1-1]',
    9: '[0-9]',
  },
  mask: '19/39/5999',
  permanents: [2, 5],
};

const dateValidateMask = /^\d{2}\/\d{2}\/\d{4}$/i;

export default dateMask;

export { dateValidateMask };
