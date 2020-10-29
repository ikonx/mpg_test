import { AxiosPromise } from "axios";
import { axiosInstance, replaceStringWithPattern } from ".";

export enum ENDPOINT_ENTITIES {
  CHAMPIONSHIP = ":championship_id",
  PLAYER = ":player_id",
}

const CHAMPIONSHIP_ENDPOINT = `championship/${ENDPOINT_ENTITIES.CHAMPIONSHIP}/2020`;
const PLAYER_ENDPOINT = `player/${ENDPOINT_ENTITIES.PLAYER}?season=2020`;

const getChampionship = async (championship_id: number) => {
  const endpoint = replaceStringWithPattern(
    CHAMPIONSHIP_ENDPOINT,
    ENDPOINT_ENTITIES.CHAMPIONSHIP,
    championship_id
  );
  return axiosInstance.get(endpoint);
};

const getPlayer = async (player_id: string) => {
  const parsedPlayerId = replaceStringWithPattern(player_id, "player_", "");
  const endpoint = replaceStringWithPattern(
    PLAYER_ENDPOINT,
    ENDPOINT_ENTITIES.PLAYER,
    parsedPlayerId
  );
  return axiosInstance.get(endpoint);
};

interface Http {
  get: {
    championship: (championship_id: number) => AxiosPromise;
    player: (player_id: string) => AxiosPromise;
  };
}

export const http: Http = {
  get: {
    championship: getChampionship,
    player: getPlayer,
  },
};
