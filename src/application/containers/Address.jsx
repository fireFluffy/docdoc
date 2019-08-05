// @flow
import React, { memo, useLayoutEffect, useMemo, useState } from 'react';
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
const onSubmit = _.constant();

const getHeight = value => (value === LABEL[1] ? 0 : 'auto');

const AddressForm = () => {
  const { form, handleSubmit, values } = useForm({
    initialValues,
    onSubmit,
  });
  const context = { form, values };
  const {
    input: { value },
  } = useField(ADDRESS.DELIVERY.NAME, form);
  const newHeight = useMemo(() => getHeight(value), [value]);
  const [height, changeHeight] = useState(null);

  useLayoutEffect(() => {
    if (!_.isEmpty(value)) {
      changeHeight(newHeight);
    }
  }, [newHeight, value]);

  if (_.isNil(height)) {
    return null;
  }

  return (
    <FormContext.Provider value={context}>
      <Tab.Pane className="tab__pane">
        <form onSubmit={handleSubmit}>
          <RenderForm height={height} />
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      </Tab.Pane>
    </FormContext.Provider>
  );
};

export default memo(AddressForm);
