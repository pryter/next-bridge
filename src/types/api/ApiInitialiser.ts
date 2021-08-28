import {ApiContextAction} from "./ApiContextAction";

export interface ApiInitialiser {
  namespace: string,
  contextAction: ApiContextAction
}
