// @flow
import Strings from '../../../../utils/strings';
import required from './required';

const { VALIDATION } = Strings.FORM;

const validateObj = {
  required: {
    call: required,
    message: VALIDATION.REQUIRED,
  },
};

export default validateObj;
