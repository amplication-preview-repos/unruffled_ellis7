import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
