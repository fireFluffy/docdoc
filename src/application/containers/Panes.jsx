// @flow
import React, { useState } from 'react';
import { useForm } from 'react-final-form-hooks';
import { Tab } from 'semantic-ui-react';
import _ from 'lodash';

import panes from '../utils/panes';
import TabsContext from '../context';
import Strings from '../utils/strings';

const { MAIN_DATA } = Strings;

const initialValues = {
  delivery: 'Доставка',
};
const onSubmit = _.constant();

const useActiveTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onTabChange = (e, { activeIndex: newIndex }) => {
    if (activeIndex !== newIndex) {
      setActiveIndex(newIndex);
    }
  };

  return [activeIndex, { setActiveIndex, onTabChange }];
};

const validate = values => {
  const errors = {};
  if (_.isEmpty(values[MAIN_DATA.NAME.NAME])) {
    errors[MAIN_DATA.NAME.NAME] = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  return errors;
};

const Panes = () => {
  const [activeIndex, { setActiveIndex, onTabChange }] = useActiveTab();
  const { form, handleSubmit, values } = useForm({
    initialValues,
    onSubmit,
    validate,
  });
  const context = { setActiveIndex, form, values };

  return (
    <form onSubmit={handleSubmit}>
      <TabsContext.Provider value={context}>
        <Tab activeIndex={activeIndex} onTabChange={onTabChange} panes={panes} />
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </TabsContext.Provider>
    </form>
  );
};

export default Panes;
export { TabsContext };
