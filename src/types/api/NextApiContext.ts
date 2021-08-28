import {NextApiRequest, NextApiResponse} from "next";

export type NextApiContext = (req: NextApiRequest, res: NextApiResponse) => Promise<void>
