/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { PredictionUpdateManyWithoutPlayersInput } from "./PredictionUpdateManyWithoutPlayersInput";
import { Type } from "class-transformer";
import { TeamWhereUniqueInput } from "../../team/base/TeamWhereUniqueInput";

@InputType()
class PlayerUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  position?: string | null;

  @ApiProperty({
    required: false,
    type: () => PredictionUpdateManyWithoutPlayersInput,
  })
  @ValidateNested()
  @Type(() => PredictionUpdateManyWithoutPlayersInput)
  @IsOptional()
  @Field(() => PredictionUpdateManyWithoutPlayersInput, {
    nullable: true,
  })
  predictions?: PredictionUpdateManyWithoutPlayersInput;

  @ApiProperty({
    required: false,
    type: () => TeamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TeamWhereUniqueInput)
  @IsOptional()
  @Field(() => TeamWhereUniqueInput, {
    nullable: true,
  })
  team?: TeamWhereUniqueInput | null;
}

export { PlayerUpdateInput as PlayerUpdateInput };