import {ActionResult} from "./ActionResult";
import {ApiParams} from "../api/ApiParams";
import {Parameters} from "../Parameters";

export type ActionBlock<T> = (ApiParams: ApiParams, parameters: T, ConditionParams: Parameters | undefined) => (ActionResult | Promise<ActionResult>)
