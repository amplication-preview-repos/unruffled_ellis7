import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PlayerTitle } from "../player/PlayerTitle";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="coach" source="coach" />
        <TextInput label="homeStadium" source="homeStadium" />
        <ReferenceArrayInput
          source="players"
          reference="Player"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlayerTitle} />
        </ReferenceArrayInput>
        <TextInput label="teamName" source="teamName" />
      </SimpleForm>
    </Edit>
  );
};
