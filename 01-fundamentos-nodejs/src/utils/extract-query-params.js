// ?search=Wallysson?page=2

export function extractQueryParams(query) {
  return query
    .substr(1)
    .split('&')
    .reduce((queryParams, param) => {
      const [key, value] = param.split('=')
      console.log(key, value)

      queryParams[key] = value

      return queryParams
    }, {})
}
