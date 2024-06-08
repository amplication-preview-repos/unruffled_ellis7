import { PredictionUpdateManyWithoutPlayersInput } from "./PredictionUpdateManyWithoutPlayersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type PlayerUpdateInput = {
  name?: string | null;
  position?: string | null;
  predictions?: PredictionUpdateManyWithoutPlayersInput;
  team?: TeamWhereUniqueInput | null;
};
