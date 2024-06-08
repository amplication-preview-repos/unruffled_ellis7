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
import { PlayerUpdateManyWithoutTeamsInput } from "./PlayerUpdateManyWithoutTeamsInput";
import { Type } from "class-transformer";

@InputType()
class TeamUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  coach?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  homeStadium?: string | null;

  @ApiProperty({
    required: false,
    type: () => PlayerUpdateManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => PlayerUpdateManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => PlayerUpdateManyWithoutTeamsInput, {
    nullable: true,
  })
  players?: PlayerUpdateManyWithoutTeamsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  teamName?: string | null;
}

export { TeamUpdateInput as TeamUpdateInput };
