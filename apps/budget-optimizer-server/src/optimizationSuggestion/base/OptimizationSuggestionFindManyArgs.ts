/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OptimizationSuggestionWhereInput } from "./OptimizationSuggestionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OptimizationSuggestionOrderByInput } from "./OptimizationSuggestionOrderByInput";

@ArgsType()
class OptimizationSuggestionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OptimizationSuggestionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OptimizationSuggestionWhereInput, { nullable: true })
  @Type(() => OptimizationSuggestionWhereInput)
  where?: OptimizationSuggestionWhereInput;

  @ApiProperty({
    required: false,
    type: [OptimizationSuggestionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OptimizationSuggestionOrderByInput], { nullable: true })
  @Type(() => OptimizationSuggestionOrderByInput)
  orderBy?: Array<OptimizationSuggestionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { OptimizationSuggestionFindManyArgs as OptimizationSuggestionFindManyArgs };
