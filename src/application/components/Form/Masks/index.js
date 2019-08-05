// @flow
import phoneMask, { phoneValidateMask } from './phone';
import emailValidateMask from './email';
import dateMask, { dateValidateMask } from './date';

const getMask = mask => {
  switch (mask) {
    case 'date':
      return dateMask;

    default:
      return phoneMask;
  }
};

const objValidateMask = {
  phone: phoneValidateMask,
  email: emailValidateMask,
  dateDelivery: dateValidateMask,
};

export default getMask;
export { objValidateMask };
