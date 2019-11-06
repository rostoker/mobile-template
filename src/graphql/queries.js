/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCause = `query GetCause($id: ID!) {
  getCause(id: $id) {
    id
    name
    description
  }
}
`;
export const listCauses = `query ListCauses(
  $filter: ModelCauseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCauses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
`;
