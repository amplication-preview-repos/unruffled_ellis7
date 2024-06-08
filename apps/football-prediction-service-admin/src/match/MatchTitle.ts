import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "awayTeam";

export const MatchTitle = (record: TMatch): string => {
  return record.awayTeam?.toString() || String(record.id);
};
