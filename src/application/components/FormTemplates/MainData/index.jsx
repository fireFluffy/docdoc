// @flow
import React, { memo } from 'react';
import { Button, Grid, Tab } from 'semantic-ui-react';

import InputAdapter from '../../Form/Fields';

import Strings from '../../../utils/strings';

const { FORM, MAIN_DATA } = Strings;
const { NAME, SURNAME, PHONE, EMAIL } = MAIN_DATA;

const MainDataForm = () => {
  return (
    <Tab.Pane className="tab__pane">
      <Grid stackable columns={2}>
        <Grid.Column>
          <InputAdapter label={NAME.LABEL} name={NAME.NAME} />
        </Grid.Column>
        <Grid.Column>
          <InputAdapter label={SURNAME.LABEL} name={SURNAME.NAME} />
        </Grid.Column>
      </Grid>
      <Grid stackable columns={1}>
        <Grid.Column>
          <InputAdapter label={PHONE.LABEL} name={PHONE.NAME} mask={PHONE.MASK} />
        </Grid.Column>
        <Grid.Column>
          <InputAdapter label={EMAIL.LABEL} name={EMAIL.NAME} placeholder={EMAIL.PLACEHOLDER} />
        </Grid.Column>
        <Grid.Column>
          <Button primary>{FORM.BUTTONS.NEXT}</Button>
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
};

export default memo(MainDataForm);
