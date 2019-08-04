// @flow
import React, { memo, useContext, useLayoutEffect, useMemo, useState } from 'react';
import { useField } from 'react-final-form-hooks';
import AnimateHeight from 'react-animate-height';
import { Button, Grid, Tab } from 'semantic-ui-react';
import _ from 'lodash';

import InputAdapter, { CheckboxAdapter, SelectAdapter, TextAreaAdapter } from '../../Form/Fields';
import TabsContext from '../../../context';
import Strings from '../../../utils/strings';

const { ADDRESS, FORM } = Strings;
const { LABEL } = ADDRESS.DELIVERY;

const getHeight = value => (value === LABEL[1] ? 0 : 'auto');

const AddressForm = () => {
  const { form } = useContext(TabsContext);
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
    <Tab.Pane className="tab__pane">
      <Grid stackable columns={1}>
        <Grid.Column>
          <div>
            <CheckboxAdapter name={ADDRESS.DELIVERY.NAME} label={ADDRESS.DELIVERY.LABEL[0]} />
          </div>
          <div>
            <CheckboxAdapter name={ADDRESS.DELIVERY.NAME} label={ADDRESS.DELIVERY.LABEL[1]} />
          </div>
        </Grid.Column>
      </Grid>
      <div className="animate-block">
        <AnimateHeight duration={500} height={height}>
          <Grid stackable columns={3}>
            <Grid.Column>
              <SelectAdapter
                name={ADDRESS.COUNTRY.NAME}
                options={ADDRESS.COUNTRY.ITEMS}
                label={ADDRESS.COUNTRY.LABEL}
              />
            </Grid.Column>
            <Grid.Column>
              <InputAdapter name={ADDRESS.CITY.NAME} label={ADDRESS.CITY.LABEL} />
            </Grid.Column>
            <Grid.Column>
              <InputAdapter name={ADDRESS.ZIP.NAME} label={ADDRESS.ZIP.LABEL} />
            </Grid.Column>
          </Grid>
          <Grid stackable columns={1}>
            <Grid.Column>
              <InputAdapter name={ADDRESS.ADDRESS.NAME} label={ADDRESS.ADDRESS.LABEL} />
            </Grid.Column>
            <Grid.Column>
              <InputAdapter
                name={ADDRESS.DATE_DELIVERY.NAME}
                label={ADDRESS.DATE_DELIVERY.LABEL}
                mask="date"
              />
            </Grid.Column>
          </Grid>
        </AnimateHeight>
      </div>
      <Grid stackable columns={1}>
        <Grid.Column>
          <TextAreaAdapter name={ADDRESS.DESCRIPTION.NAME} label={ADDRESS.DESCRIPTION.LABEL} />
        </Grid.Column>
        <Grid.Column>
          <Button primary>{FORM.BUTTONS.SUBMIT}</Button>
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
};

export default memo(AddressForm);
