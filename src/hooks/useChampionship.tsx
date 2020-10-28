import { useEffect, useState } from "react";
import { http } from "../utils/http";

export interface Player {
  club: string;
  firstname: string;
  id: string;
  position: number;
  quotation: number;
  stats: {
    avgRate: string | number;
    currentChampionship: 1;
    percentageStarter: 0;
    sumGoals: 0;
  };
  teamId: number;
  ultraPosition: number;
}

interface ChampionShip {
  players: Player[];
  loading: boolean;
}

export const useChampionship = (championship_id: number): ChampionShip => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoader] = useState(false);

  useEffect(() => {
    setLoader((prevState) => !prevState);
    try {
      http.get
        .championship(championship_id)
        .then((res: any) => {
          setPlayers(res.data);
          console.log(res.data);
        })
        .finally(() => setLoader((prevState) => !prevState));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { players, loading };
};
