import { PredictionCreateNestedManyWithoutPlayersInput } from "./PredictionCreateNestedManyWithoutPlayersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type PlayerCreateInput = {
  name?: string | null;
  position?: string | null;
  predictions?: PredictionCreateNestedManyWithoutPlayersInput;
  team?: TeamWhereUniqueInput | null;
};
