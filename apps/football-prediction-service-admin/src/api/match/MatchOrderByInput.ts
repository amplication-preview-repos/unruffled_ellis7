import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  awayTeam?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  homeTeam?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
};
