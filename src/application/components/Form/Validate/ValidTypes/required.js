// @flow
import _ from 'lodash';

const required = value => {
  if (_.isNil(value)) {
    return false;
  }

  if (_.isString(value)) {
    return !_.isEmpty(value);
  }

  if (_.isArray(value)) {
    return !!value.length;
  }

  if (_.isObject(value)) {
    return !!_.keys(value).length;
  }

  return false;
};

export default required;
