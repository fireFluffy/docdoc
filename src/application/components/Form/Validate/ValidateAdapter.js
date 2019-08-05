// @flow
import _ from 'lodash';
import validateObj from './ValidTypes';

const notFalse = value => value !== false;

const validateAdapter = (label, validators) => value => {
  const obj = _.pickBy(validators, notFalse);
  const errors = {};

  _.forOwn(obj, (val, key) => {
    if (_.has(validateObj, key)) {
      const result = validateObj[key].call(value);

      if (!result) {
        errors[key] = validateObj[key].message(label);
      }
    }
  });

  return _.keys(errors).length ? errors : null;
};

export default validateAdapter;
