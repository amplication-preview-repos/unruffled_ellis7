import { Prediction } from "../prediction/Prediction";
import { JsonValue } from "type-fest";

export type Match = {
  awayTeam: string | null;
  createdAt: Date;
  date: Date | null;
  homeTeam: string | null;
  id: string;
  predictions?: Array<Prediction>;
  score: JsonValue;
  updatedAt: Date;
};
