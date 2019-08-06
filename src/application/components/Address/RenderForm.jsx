// @flow
import React, { memo } from 'react';
import AnimateHeight from 'react-animate-height';
import { Button, Grid } from 'semantic-ui-react';

import { InputAdapter, CheckboxAdapter, SelectAdapter, TextAreaAdapter } from '../Form/Fields';
import FormContext from '../Form/Context';
import Strings from '../../utils/strings';

const { ADDRESS, FORM } = Strings;

const RenderForm = ({ form, handleSubmit, submitFailed, valid, values }) => {
  const context = { change: form.change, submitFailed, values };

  return (
    <FormContext.Provider value={context}>
      <form onSubmit={handleSubmit}>
        <Grid stackable columns={1}>
          <Grid.Column>
            <div>
              <CheckboxAdapter
                name={ADDRESS.DELIVERY.NAME}
                label={ADDRESS.DELIVERY.LABEL[0]}
                value={ADDRESS.DELIVERY.LABEL[0]}
              />
            </div>
            <div>
              <CheckboxAdapter
                name={ADDRESS.DELIVERY.NAME}
                label={ADDRESS.DELIVERY.LABEL[1]}
                value={ADDRESS.DELIVERY.LABEL[1]}
              />
            </div>
          </Grid.Column>
        </Grid>
        <div className="animate-block">
          {/* <AnimateHeight duration={500} height={height}> */}
          <Grid stackable columns={3}>
            <Grid.Column>
              <SelectAdapter
                name={ADDRESS.COUNTRY.NAME}
                options={ADDRESS.COUNTRY.ITEMS}
                label={ADDRESS.COUNTRY.LABEL}
                // required={required}
              />
            </Grid.Column>
            <Grid.Column>
              <InputAdapter
                name={ADDRESS.CITY.NAME}
                label={ADDRESS.CITY.LABEL}
                // required={required}
              />
            </Grid.Column>
            <Grid.Column>
              <InputAdapter
                name={ADDRESS.ZIP.NAME}
                label={ADDRESS.ZIP.LABEL}
                // equal={6}
                // max={6}
                // required={required}
              />
            </Grid.Column>
          </Grid>
          <Grid stackable columns={1}>
            <Grid.Column>
              <InputAdapter
                name={ADDRESS.ADDRESS.NAME}
                label={ADDRESS.ADDRESS.LABEL}
                // required={required}
              />
            </Grid.Column>
            <Grid.Column>
              <InputAdapter
                name={ADDRESS.DATE_DELIVERY.NAME}
                label={ADDRESS.DATE_DELIVERY.LABEL}
                // mask="date"
                // required={required}
              />
            </Grid.Column>
          </Grid>
          {/* </AnimateHeight> */}
        </div>
        <Grid stackable columns={1}>
          <Grid.Column>
            <TextAreaAdapter name={ADDRESS.DESCRIPTION.NAME} label={ADDRESS.DESCRIPTION.LABEL} />
          </Grid.Column>
          <Grid.Column>
            <Button primary type="submit">
              {FORM.BUTTONS.SUBMIT}
            </Button>
          </Grid.Column>
        </Grid>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    </FormContext.Provider>
  );
};

export default memo(RenderForm);
