import { NextApiRequest, NextApiResponse } from "next";

export interface ApiParams {
  req: NextApiRequest,
  res: NextApiResponse,
}
