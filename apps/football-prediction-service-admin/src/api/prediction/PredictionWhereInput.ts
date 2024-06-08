import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PredictionWhereInput = {
  id?: StringFilter;
  likelihoodToScore?: FloatNullableFilter;
  match?: MatchWhereUniqueInput;
  performanceScore?: IntNullableFilter;
  player?: PlayerWhereUniqueInput;
};
