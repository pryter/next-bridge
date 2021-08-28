import {ActionBlock} from "./types/action/ActionBlock";
import {Parameters} from "./types/Parameters";
import {ConditionBlock} from "./types/condition/ConditionBlock";
import {ApiInitialiser} from "./types/api/ApiInitialiser";
import {ApiContextAction} from "./types/api/ApiContextAction";
import {ActionResult} from "./types/action/ActionResult";

export const initApiContext = (namespace: string, actionBlock: ActionBlock<Parameters>, conditionBlock: ConditionBlock<Parameters>): ApiInitialiser => {

  const contextAction: ApiContextAction= async (data, req, res) => {

    let condition: ActionResult

    if (typeof conditionBlock === "function") {
      condition = await conditionBlock(req, res)
    } else {
      if (typeof conditionBlock === "boolean") {
        condition = {status: conditionBlock, report: ""}
      } else {
        condition = conditionBlock
      }
    }

    if (!condition.status) {
      res.json(condition)
      return
    }

    const result = await actionBlock({req, res}, data, condition.data)
    res.json(result)

  }

  return {
    namespace,
    contextAction
  }
}
