import {NextInitialisers} from "./types/api/NextInitialisers";
import {NextApiRequest, NextApiResponse} from "next";
import {NextApiContext} from "./types/api/NextApiContext";

export const establishNextApi = (preferredMethod: "POST" | "GET", initialisers: NextInitialisers): NextApiContext => {

  const NextApiContext = async (req: NextApiRequest, res: NextApiResponse) => {

    const {method} = req

    if (method !== preferredMethod) {
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
    }

    let data: { [p: string]: string | string[] }

    if (preferredMethod === "POST") {
      data = req.body
    }else{
      data = req.query
    }

    if (Array.isArray(initialisers)) {

      await initialisers.find(value => { if (value.namespace === data.action) return value })?.contextAction(data, req, res)

    }else{

      initialisers.namespace === data.action && await initialisers.contextAction(data, req, res)

    }

  }

  return NextApiContext

}
