import Axios from "axios";

export const replaceStringWithPattern = (
  stringToReplace: string,
  pattern: string,
  value: string | number
): string => {
  const parsedValue = typeof value === "number" ? value.toString() : value;
  return stringToReplace.replace(pattern, parsedValue);
};

export const axiosInstance = Axios.create({
  baseURL: "https://api.monpetitgazon.com/stats/",
});

export enum ULTRA_POSITION {
  GOAL_KEEPER = 10,
  DEFENDER = 20,
  WINGER = 21,
  DEFENSIVE_MIDFIELDER = 31,
  OFFENSIVE_MIDFIELDER = 32,
  FORWARD = 40,
}

export const ULTRA_POSITION_HUMAIN_READABLE = {
  [ULTRA_POSITION.GOAL_KEEPER]: "Gardien",
  [ULTRA_POSITION.DEFENDER]: "Défenseur",
  [ULTRA_POSITION.WINGER]: "Lateral",
  [ULTRA_POSITION.DEFENSIVE_MIDFIELDER]: "Milieu Défensif",
  [ULTRA_POSITION.OFFENSIVE_MIDFIELDER]: "Milieu Offensif",
  [ULTRA_POSITION.FORWARD]: "Attaquant",
};

export enum NAVIGATION_SCREENS {
  HOME = "Home",
  DETAILS = "Details",
}
