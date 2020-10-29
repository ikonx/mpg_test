import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ULTRA_POSITION } from "../utils";
import { http } from "../utils/http";

export interface Player {
  club: string;
  firstname: string | null;
  lastname: string | null;
  id: string;
  position: number;
  quotation: number;
  stats: {
    avgRate: string | number;
    currentChampionship: number;
    percentageStarter: number;
    sumGoals: number;
  };
  teamId: number;
  ultraPosition: ULTRA_POSITION;
}

interface ChampionshipHook {
  players: Player[];
  loading: boolean;
  error: AxiosError | null;
}

export const useChampionship = (championship_id: number): ChampionshipHook => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoader] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    setLoader((prevState) => !prevState);
    http.get
      .championship(championship_id)
      .then((res: any) => {
        setPlayers(res.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoader((prevState) => !prevState));
  }, []);

  return { players, loading, error };
};
