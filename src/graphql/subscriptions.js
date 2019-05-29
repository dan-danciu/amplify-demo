// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePerson = `subscription OnCreatePerson {
  onCreatePerson {
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
export const onUpdatePerson = `subscription OnUpdatePerson {
  onUpdatePerson {
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
export const onDeletePerson = `subscription OnDeletePerson {
  onDeletePerson {
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
export const onCreateInterestsIntermediate = `subscription OnCreateInterestsIntermediate {
  onCreateInterestsIntermediate {
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
export const onUpdateInterestsIntermediate = `subscription OnUpdateInterestsIntermediate {
  onUpdateInterestsIntermediate {
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
export const onDeleteInterestsIntermediate = `subscription OnDeleteInterestsIntermediate {
  onDeleteInterestsIntermediate {
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
export const onCreateInterest = `subscription OnCreateInterest {
  onCreateInterest {
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
export const onUpdateInterest = `subscription OnUpdateInterest {
  onUpdateInterest {
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
export const onDeleteInterest = `subscription OnDeleteInterest {
  onDeleteInterest {
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
