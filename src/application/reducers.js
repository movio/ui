// @flow
import { actionTypes, unload_action } from 'generated/version';

import type { Service } from 'generated/version/ServiceType';

export type State = {|
  loaded: boolean,
  service?: Service,
  importedServices: Service[],
|};

type Action = {|
  type: string,
  payload: any, // FIXME
|};

const initialState: State = {
  loaded: false,
  importedServices: [],
};

const application = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.getByOrgkeyAndApplicationkeyAndVersion_success: {
      return {
        loaded: true,
        service: action.payload.service,
        importedServices: action.payload.importedServices,
      };
    }
    case actionTypes.getByOrgkeyAndApplicationkeyAndVersion_doing: {
      return Object.assign(state, {
        loaded: false,
      });
    }
    case unload_action: {
      return Object.assign(state, {
        loaded: false,
        service: null,
      });
    }
    default: {
      return state;
    }
  }
};

const reducers = {
  application,
};

export { reducers };
