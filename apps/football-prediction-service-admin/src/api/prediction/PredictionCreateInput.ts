import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PredictionCreateInput = {
  likelihoodToScore?: number | null;
  match?: MatchWhereUniqueInput | null;
  performanceScore?: number | null;
  player?: PlayerWhereUniqueInput | null;
};
