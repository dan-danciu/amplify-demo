export const listPersons = `query ListPersons(
  $filter: ModelPersonFilterInput
  $limit: Int
  $nextToken: String
) {
  listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      interests {
        items {
          id
          interest {
            id
            name
          }
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
