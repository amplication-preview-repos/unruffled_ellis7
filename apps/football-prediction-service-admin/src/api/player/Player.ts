import { Prediction } from "../prediction/Prediction";
import { Team } from "../team/Team";

export type Player = {
  createdAt: Date;
  id: string;
  name: string | null;
  position: string | null;
  predictions?: Array<Prediction>;
  team?: Team | null;
  updatedAt: Date;
};
