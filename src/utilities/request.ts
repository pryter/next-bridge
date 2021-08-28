import {ActionResult} from "../types/action/ActionResult";

export const request = async (path: string, action: string, data: {}): Promise<ActionResult> => {

  const reqData = {
    action: action,
    ...data
  }

  try {
    const res = await fetch(`/api/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqData),
      credentials: 'include'
    })

    return await res.json()
  } catch (e) {
    return {status: false, report: "unexpected_error", data: null}
  }

}
