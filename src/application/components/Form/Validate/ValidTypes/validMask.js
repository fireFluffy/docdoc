// @flow
import _ from 'lodash';
import { objValidateMask } from '../../Masks';

const validMask = (value, options) => {
  if (_.isString(options?.mask)) {
    return objValidateMask[options.name].test(value);
  }

  return true;
};

export default validMask;
