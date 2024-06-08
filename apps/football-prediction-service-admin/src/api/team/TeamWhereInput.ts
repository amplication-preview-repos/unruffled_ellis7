import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlayerListRelationFilter } from "../player/PlayerListRelationFilter";

export type TeamWhereInput = {
  coach?: StringNullableFilter;
  homeStadium?: StringNullableFilter;
  id?: StringFilter;
  players?: PlayerListRelationFilter;
  teamName?: StringNullableFilter;
};
