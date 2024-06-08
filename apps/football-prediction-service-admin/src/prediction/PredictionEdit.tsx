import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MatchTitle } from "../match/MatchTitle";
import { PlayerTitle } from "../player/PlayerTitle";

export const PredictionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
