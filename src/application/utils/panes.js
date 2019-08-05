import React from 'react';

import MainDataForm from '../containers/MainData';
import AddressForm from '../containers/Address';
import Strings from './strings';

const RenderMainData = () => <MainDataForm />;
const RenderAddress = () => <AddressForm />;

const panes = [
  { menuItem: Strings.TABS.MAIN_DATA, render: RenderMainData },
  { menuItem: Strings.TABS.ADDRESS, render: RenderAddress },
];

export default panes;
