import { Match } from "../match/Match";
import { Player } from "../player/Player";

export type Prediction = {
  createdAt: Date;
  id: string;
  likelihoodToScore: number | null;
  match?: Match | null;
  performanceScore: number | null;
  player?: Player | null;
  updatedAt: Date;
};
