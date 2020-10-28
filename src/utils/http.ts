export enum ENDPOINT_ENTITIES {
  CHAMPIONSHIP = ":championship_id",
  PLAYER = ":player_id",
}

const CHAMPIONSHIP_ENDPOINT = `championship/${ENDPOINT_ENTITIES.CHAMPIONSHIP}/2020`;
const PLAYER_ENDPOINT = `player/${ENDPOINT_ENTITIES.PLAYER}?season=2018`;

interface Http {
  get: {
    championship: string;
    player: string;
  };
}
export const http: Http = {
  get: {
    championship: CHAMPIONSHIP_ENDPOINT,
    player: PLAYER_ENDPOINT,
  },
};
