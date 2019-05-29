// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPerson = `mutation CreatePerson($input: CreatePersonInput!) {
  createPerson(input: $input) {
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
export const updatePerson = `mutation UpdatePerson($input: UpdatePersonInput!) {
  updatePerson(input: $input) {
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
export const deletePerson = `mutation DeletePerson($input: DeletePersonInput!) {
  deletePerson(input: $input) {
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
export const createInterestsIntermediate = `mutation CreateInterestsIntermediate(
  $input: CreateInterestsIntermediateInput!
) {
  createInterestsIntermediate(input: $input) {
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
export const updateInterestsIntermediate = `mutation UpdateInterestsIntermediate(
  $input: UpdateInterestsIntermediateInput!
) {
  updateInterestsIntermediate(input: $input) {
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
export const deleteInterestsIntermediate = `mutation DeleteInterestsIntermediate(
  $input: DeleteInterestsIntermediateInput!
) {
  deleteInterestsIntermediate(input: $input) {
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
export const createInterest = `mutation CreateInterest($input: CreateInterestInput!) {
  createInterest(input: $input) {
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
export const updateInterest = `mutation UpdateInterest($input: UpdateInterestInput!) {
  updateInterest(input: $input) {
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
export const deleteInterest = `mutation DeleteInterest($input: DeleteInterestInput!) {
  deleteInterest(input: $input) {
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
