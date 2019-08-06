// @flow
import React, { memo, useContext } from 'react';
import _ from 'lodash';

import DefaultInput from './DefaultInput';
import InputMaskWrapper from './InputMaskWrapper';
import Label from '../Label';

import { FieldContext } from '../../Context';

const InputWrapper = () => {
  const { label, mask } = useContext(FieldContext);

  return (
    <>
      <Label>{label}</Label>
      {_.isString(mask) ? <InputMaskWrapper /> : <DefaultInput />}
    </>
  );
};

InputWrapper.defaultProps = {
  mask: null,
};

export default memo(InputWrapper);
