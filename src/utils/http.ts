import { AxiosPromise } from "axios";
import { axiosInstance } from ".";

export enum ENDPOINT_ENTITIES {
  CHAMPIONSHIP = ":championship_id",
  PLAYER = ":player_id",
}

const CHAMPIONSHIP_ENDPOINT = `championship/${ENDPOINT_ENTITIES.CHAMPIONSHIP}/2020`;
const PLAYER_ENDPOINT = `player/${ENDPOINT_ENTITIES.PLAYER}?season=2018`;

const getChampionship = axiosInstance.get(CHAMPIONSHIP_ENDPOINT);
const getPlayer = axiosInstance.get(PLAYER_ENDPOINT);

interface Http {
  get: {
    championship: AxiosPromise;
    player: AxiosPromise;
  };
}

export const http: Http = {
  get: {
    championship: getChampionship,
    player: getPlayer,
  },
};
