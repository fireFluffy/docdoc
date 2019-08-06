// @flow
import React, { useContext, memo } from 'react';
import { Form } from 'react-final-form';
import { Tab } from 'semantic-ui-react';

import RenderForm from '../components/MainData/RenderForm';
import TabsContext from '../context';

const onSubmit = values => {
  console.log(values);
  return null;
};

const MainDataForm = () => {
  const { formState } = useContext(TabsContext);

  return (
    <Tab.Pane className="tab__pane">
      <Form initialValues={formState} onSubmit={onSubmit} component={RenderForm} />
    </Tab.Pane>
  );
};

export default memo(MainDataForm);
