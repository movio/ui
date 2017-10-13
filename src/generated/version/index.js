// This file is generated

import * as getByOrgkeyAndApplicationkeyAndVersion
  from 'generated/version/getByOrgkeyAndApplicationkeyAndVersion';

const actionTypes = Object.assign(
  {},
  getByOrgkeyAndApplicationkeyAndVersion.actionTypes
);

const actions = Object.assign(
  {},
  getByOrgkeyAndApplicationkeyAndVersion.actions
);

const sagas = {
  getByOrgkeyAndApplicationkeyAndVersionTakeEverySaga: getByOrgkeyAndApplicationkeyAndVersion.takeEverySaga,
  getByOrgkeyAndApplicationkeyAndVersionLatestSaga: getByOrgkeyAndApplicationkeyAndVersion.takeLatestSaga,
};

const unloadAction = 'UNLOAD_APPLICATION';

export { actionTypes, actions, sagas, unloadAction };
