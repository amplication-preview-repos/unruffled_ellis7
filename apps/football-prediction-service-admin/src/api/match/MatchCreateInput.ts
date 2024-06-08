import { PredictionCreateNestedManyWithoutMatchesInput } from "./PredictionCreateNestedManyWithoutMatchesInput";
import { InputJsonValue } from "../../types";

export type MatchCreateInput = {
  awayTeam?: string | null;
  date?: Date | null;
  homeTeam?: string | null;
  predictions?: PredictionCreateNestedManyWithoutMatchesInput;
  score?: InputJsonValue;
};
