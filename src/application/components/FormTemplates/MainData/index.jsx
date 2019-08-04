// @flow
import React, { memo } from 'react';
import { Button, Grid, Tab } from 'semantic-ui-react';

import InputAdapter from '../../Form/Fields';

import Strings from '../../../utils/strings';

const { FORM, MAIN_DATA } = Strings;

const MainDataForm = () => {
  return (
    <Tab.Pane className="tab__pane">
      <Grid stackable columns={2}>
        <Grid.Column>
          <InputAdapter label={MAIN_DATA.NAME.LABEL} name={MAIN_DATA.NAME.NAME} />
        </Grid.Column>
        <Grid.Column>
          <InputAdapter label={MAIN_DATA.SURNAME.LABEL} name={MAIN_DATA.SURNAME.NAME} />
        </Grid.Column>
      </Grid>
      <Grid stackable columns={1}>
        <Grid.Column>
          <InputAdapter label={MAIN_DATA.PHONE.LABEL} name={MAIN_DATA.PHONE.NAME} mask="phone" />
        </Grid.Column>
        <Grid.Column>
          <InputAdapter label={MAIN_DATA.EMAIL.LABEL} name={MAIN_DATA.EMAIL.NAME} />
        </Grid.Column>
        <Grid.Column>
          <Button primary>{FORM.BUTTONS.NEXT}</Button>
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
};

export default memo(MainDataForm);
