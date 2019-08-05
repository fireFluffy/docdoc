// @flow
import React, { useContext, useEffect, memo } from 'react';
import { useForm } from 'react-final-form-hooks';
import { Tab } from 'semantic-ui-react';
import _ from 'lodash';

import RenderForm from '../components/MainData/RenderForm';
import TabsContext from '../context';
import FormContext from '../components/Form/Context';

const onSubmit = values => {
  console.log(values);
  return null;
};

const MainDataForm = () => {
  const { formState, updateFormState, updateIsValid } = useContext(TabsContext);
  const { form, handleSubmit, submitFailed, values, valid } = useForm({
    initialValues: formState,
    onSubmit,
  });
  const context = { form, submitFailed, values };

  useEffect(() => {
    updateIsValid(valid);
  }, [updateIsValid, valid]);

  // Unmount Component
  useEffect(
    () => () => {
      const objForm = _.assign(formState, values);
      updateFormState(objForm);
    },
    [formState, updateFormState, values]
  );

  return (
    <FormContext.Provider value={context}>
      <Tab.Pane className="tab__pane">
        <form onSubmit={handleSubmit}>
          <RenderForm />
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      </Tab.Pane>
    </FormContext.Provider>
  );
};

export default memo(MainDataForm);
