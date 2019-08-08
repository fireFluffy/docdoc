// @flow
import _ from 'lodash';
import validateObj from './ValidTypes';

const defaultValidators = {
  validMask: true,
  validEmail: true,
};

const notFalse = value => value !== false;

function validateAdapter(value) {
  const obj = _.assign(_.pickBy(this.validators, notFalse), defaultValidators);
  const errors = {};

  _.forOwn(obj, (val, key) => {
    if (_.has(validateObj, key)) {
      const result = validateObj[key].call(value, this.options);

      if (!result) {
        errors[key] = validateObj[key].message(this.label, this.options);
      }
    }
  });

  return _.keys(errors).length ? errors : null;
}

export default validateAdapter;
