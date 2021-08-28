import {BridgeContext} from "./types/bridge/BridgeContext";
import {request} from "./utilities/request";
import {Parameters} from "./types/Parameters";
import {ActionBlock} from "./types/action/ActionBlock";
import {ApiInitialiser} from "./types/api/ApiInitialiser";
import {initApiContext} from "./initApiContext";
import {ConditionBlock} from "./types/condition/ConditionBlock";

export const createBridgeContext = (namespace: string, ApiPath: string): BridgeContext<any> => {

  const call = async (parameters: Parameters) => {
    return await request(ApiPath, namespace, parameters)
  }

  const init = (actionBlock: ActionBlock<any>, conditionBlock = true): ApiInitialiser  => {
    return initApiContext(namespace, actionBlock, conditionBlock)
  }

  const createAction = (actionBlock: ActionBlock<any>) => (actionBlock)
  const createCondition = (conditionBlock: ConditionBlock<any>) => (conditionBlock)

  const helper = {
    createAction,
    createCondition
  }

  return {init, call, helper}
}
