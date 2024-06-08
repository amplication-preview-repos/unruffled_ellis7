import { SortOrder } from "../../util/SortOrder";

export type PredictionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  likelihoodToScore?: SortOrder;
  matchId?: SortOrder;
  performanceScore?: SortOrder;
  playerId?: SortOrder;
  updatedAt?: SortOrder;
};
