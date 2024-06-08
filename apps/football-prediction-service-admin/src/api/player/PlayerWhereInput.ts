import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PredictionListRelationFilter } from "../prediction/PredictionListRelationFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type PlayerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  position?: StringNullableFilter;
  predictions?: PredictionListRelationFilter;
  team?: TeamWhereUniqueInput;
};
