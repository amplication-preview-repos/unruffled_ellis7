import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PredictionListRelationFilter } from "../prediction/PredictionListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MatchWhereInput = {
  awayTeam?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  homeTeam?: StringNullableFilter;
  id?: StringFilter;
  predictions?: PredictionListRelationFilter;
  score?: JsonFilter;
};
