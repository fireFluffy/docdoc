// @flow
import _ from 'lodash';
import validateObj from './ValidTypes';

const defaultValidators = {
  validMask: true,
  validEmail: true,
};

const notFalse = value => value !== false;

const validateAdapter = (label, validators, options) => value => {
  const obj = _.assign(_.pickBy(validators, notFalse), defaultValidators);
  const errors = {};

  _.forOwn(obj, (val, key) => {
    if (_.has(validateObj, key)) {
      const result = validateObj[key].call(value, options);

      if (!result) {
        errors[key] = validateObj[key].message(label, options);
      }
    }
  });

  return _.keys(errors).length ? errors : null;
};

export default validateAdapter;
