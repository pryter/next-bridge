import {ActionBlock} from "../action/ActionBlock";
import {ConditionBlock} from "../condition/ConditionBlock";

export interface BridgeContextHelper<T> {
  createAction(actionBlock: ActionBlock<T>): ActionBlock<T>
  createCondition(conditionBlock: ConditionBlock<T>): ConditionBlock<T>
}
