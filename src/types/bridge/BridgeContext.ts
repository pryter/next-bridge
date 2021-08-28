import {BridgeContextHelper} from "./BridgeContextHelper";
import {ActionResult} from "../action/ActionResult";
import {ActionBlock} from "../action/ActionBlock";
import {ConditionBlock} from "../condition/ConditionBlock";
import {ApiInitialiser} from "../api/ApiInitialiser";

export interface BridgeContext<T> {
  init(actionBlock: ActionBlock<T>, conditionBlock?: ConditionBlock<T>): ApiInitialiser,
  call(parameters: T): Promise<ActionResult>,
  helper: BridgeContextHelper<T>
}
