// @flow
import _ from 'lodash';

const equal = (value, options) => {
  if (options.required) {
    return value?.length === options?.equal;
  }

  return true;
};

export default equal;
