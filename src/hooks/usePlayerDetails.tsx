import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ULTRA_POSITION } from "../utils";
import { http } from "../utils/http";

// create interfaces for all position with correct stats ect...
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
    sumGoalAssist: number;
    sumPenalties: number;
    minutesByGoal: number;
    goalByMatch: number;
    shotByMatch: number;
    sumBigChanceMissed: number;
    percentageWonContest: number;
    wonContestByMatch: number;
    percentageWonDuel: number;
    wonDuelByMatch: number;
    lostBallByMatch: number;
    foulsByMatch: number;
    foulsEnduredByMatch: number;
    shotOnTargetByMatch: number;
    percentageShotOnTarget: number;
    
    goalsConcededByMatch: number;
    sumSaves: number;
    sumDeflect: number;
    sumPenaltySave: number;
  };
  teamId: number;
  ultraPosition: ULTRA_POSITION;
}

interface PlayerHook {
  player: Player | null;
  loading: boolean;
  error: AxiosError | null;
}

export const usePlayerDetails = (player_id: string): PlayerHook => {
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoader] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    setLoader((prevState) => !prevState);
    http.get
      .player(player_id)
      .then((res: any) => {
        setPlayer(res.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoader((prevState) => !prevState));
  }, []);

  return { player, loading, error };
};
