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
