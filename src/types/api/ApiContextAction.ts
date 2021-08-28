import {NextApiRequest, NextApiResponse} from "next";
import {Parameters} from "../Parameters";

export type ApiContextAction = (data: Parameters, req: NextApiRequest, res: NextApiResponse) => Promise<void>
