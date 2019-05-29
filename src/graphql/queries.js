// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPerson = `query GetPerson($id: ID!) {
  getPerson(id: $id) {
    id
    name
    interests {
      items {
        id
      }
      nextToken
    }
  }
}
`;
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
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getInterestsIntermediate = `query GetInterestsIntermediate($id: ID!) {
  getInterestsIntermediate(id: $id) {
    id
    interest {
      id
      name
      personInterests {
        nextToken
      }
    }
    person {
      id
      name
      interests {
        nextToken
      }
    }
  }
}
`;
export const listInterestsIntermediates = `query ListInterestsIntermediates(
  $filter: ModelInterestsIntermediateFilterInput
  $limit: Int
  $nextToken: String
) {
  listInterestsIntermediates(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      interest {
        id
        name
      }
      person {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getInterest = `query GetInterest($id: ID!) {
  getInterest(id: $id) {
    id
    name
    personInterests {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listInterests = `query ListInterests(
  $filter: ModelInterestFilterInput
  $limit: Int
  $nextToken: String
) {
  listInterests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      personInterests {
        nextToken
      }
    }
    nextToken
  }
}
`;
