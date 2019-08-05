// @flow
import { objValidateMask } from '../../Masks';

const validEmail = (value, options) => {
  if (options?.name === 'email') {
    return objValidateMask[options.name].test(value);
  }

  return true;
};

export default validEmail;
