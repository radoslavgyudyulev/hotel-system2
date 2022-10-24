import authHeader from './services/auth-header'

export const requestOptionsBuilder = (method = "GET", body) => {
  return {
    mode: "cors",
    method: `${method}`,
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: body && JSON.stringify(body),
  }
}