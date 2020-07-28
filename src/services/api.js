export const getAllCharacters = (pageNum) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${pageNum}`)
    .then(res => res.json());
};

export const getCharacter = (characterId) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${characterId}`)
    .then(res => res.json());
};
