// @flow
import React, { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import _ from 'lodash';

import panes from '../utils/panes';
import TabsContext from '../context';

const Panes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formState, updateFormState] = useState({});
  const [isValid, updateIsValid] = useState(null);
  const context = { formState, isValid, setActiveIndex, updateFormState, updateIsValid };
  const onTabChange = (e, { activeIndex: newIndex }) => {
    if (!_.isNil(newIndex) && activeIndex !== newIndex) {
      if (activeIndex || isValid) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <TabsContext.Provider value={context}>
      <Tab activeIndex={activeIndex} onTabChange={onTabChange} panes={panes} />
    </TabsContext.Provider>
  );
};

export default Panes;
export { TabsContext };
