import {NextApiRequest, NextApiResponse} from "next";
import {ActionResult} from "../action/ActionResult";

export type ConditionBlock<T> = ((req: NextApiRequest, res: NextApiResponse, data?: T) => Promise<ActionResult>) | ActionResult | boolean
