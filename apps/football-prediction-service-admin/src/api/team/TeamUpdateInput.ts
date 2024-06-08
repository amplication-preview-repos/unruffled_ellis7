import { PlayerUpdateManyWithoutTeamsInput } from "./PlayerUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  coach?: string | null;
  homeStadium?: string | null;
  players?: PlayerUpdateManyWithoutTeamsInput;
  teamName?: string | null;
};
