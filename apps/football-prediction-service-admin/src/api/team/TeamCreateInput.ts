import { PlayerCreateNestedManyWithoutTeamsInput } from "./PlayerCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  coach?: string | null;
  homeStadium?: string | null;
  players?: PlayerCreateNestedManyWithoutTeamsInput;
  teamName?: string | null;
};
