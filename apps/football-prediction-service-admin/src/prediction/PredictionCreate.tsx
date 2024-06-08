import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MatchTitle } from "../match/MatchTitle";
import { PlayerTitle } from "../player/PlayerTitle";

export const PredictionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="likelihoodToScore" source="likelihoodToScore" />
        <ReferenceInput source="match.id" reference="Match" label="match">
          <SelectInput optionText={MatchTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="performanceScore"
          source="performanceScore"
        />
        <ReferenceInput source="player.id" reference="Player" label="player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
