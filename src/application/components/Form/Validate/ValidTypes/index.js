// @flow
import equal from './equal';
import required from './required';
import validEmail from './validEmail';
import validMask from './validMask';

import Strings from '../../../../utils/strings';

const { VALIDATION } = Strings.FORM;

const validateObj = {
  equal: {
    call: equal,
    message: VALIDATION.EQUAL,
  },
  required: {
    call: required,
    message: VALIDATION.REQUIRED,
  },
  validEmail: {
    call: validEmail,
    message: VALIDATION.VALID_EMAIL,
  },
  validMask: {
    call: validMask,
    message: VALIDATION.VALID_MASK,
  },
};

export default validateObj;
