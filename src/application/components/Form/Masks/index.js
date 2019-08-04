// @flow
import phoneMask from './phone';
import dateMask from './date';

const getMask = mask => {
  switch (mask) {
    case 'date':
      return dateMask;

    default:
      return phoneMask;
  }
};

export default getMask;
