import { PredictionUpdateManyWithoutMatchesInput } from "./PredictionUpdateManyWithoutMatchesInput";
import { InputJsonValue } from "../../types";

export type MatchUpdateInput = {
  awayTeam?: string | null;
  date?: Date | null;
  homeTeam?: string | null;
  predictions?: PredictionUpdateManyWithoutMatchesInput;
  score?: InputJsonValue;
};
