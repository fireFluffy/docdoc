// @flow
import React, { memo, useEffect, useMemo, useState } from 'react';
import { Form } from 'react-final-form';
import { useField, useForm } from 'react-final-form-hooks';
import { Tab } from 'semantic-ui-react';
import _ from 'lodash';

import RenderForm from '../components/Address/RenderForm';
import Strings from '../utils/strings';
import FormContext from '../components/Form/Context';

const { ADDRESS } = Strings;
const { LABEL } = ADDRESS.DELIVERY;

const initialValues = {
  delivery: 'Доставка',
};
const onSubmit = values => {
  console.log(values);
  return null;
};

// const getHeight = value => {
//   const isEqualRadio = value === LABEL[1];
//   return {
//     newHeight: isEqualRadio ? 0 : 'auto',
//     required: !isEqualRadio,
//   };
// };

const AddressForm = () => {
  // const { form, handleSubmit, submitFailed, values } = useForm({
  //   initialValues,
  //   onSubmit,
  // });
  // const {
  //   input: { value },
  // } = useField(ADDRESS.DELIVERY.NAME, form);
  // const { newHeight, required } = useMemo(() => getHeight(value), []);
  // const [height, changeHeight] = useState(null);

  // useEffect(() => {
  //   if (!_.isEmpty(value)) {
  //     changeHeight(newHeight);
  //   }
  // }, [newHeight]);

  // if (_.isNil(height)) {
  //   return null;
  // }

  return (
    <Tab.Pane className="tab__pane">
      <Form initialValues={initialValues} onSubmit={onSubmit} component={RenderForm} />
      {/* <form onSubmit={handleSubmit}>
        <RenderForm height={height} required={required} />
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form> */}
    </Tab.Pane>
  );
};

export default memo(AddressForm);
