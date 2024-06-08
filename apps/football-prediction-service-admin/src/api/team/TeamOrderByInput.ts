import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  coach?: SortOrder;
  createdAt?: SortOrder;
  homeStadium?: SortOrder;
  id?: SortOrder;
  teamName?: SortOrder;
  updatedAt?: SortOrder;
};
