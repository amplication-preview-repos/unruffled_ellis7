import { Player } from "../player/Player";

export type Team = {
  coach: string | null;
  createdAt: Date;
  homeStadium: string | null;
  id: string;
  players?: Array<Player>;
  teamName: string | null;
  updatedAt: Date;
};
