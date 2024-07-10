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
import { OptimizationSuggestionWhereUniqueInput } from "./OptimizationSuggestionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OptimizationSuggestionUpdateInput } from "./OptimizationSuggestionUpdateInput";

@ArgsType()
class UpdateOptimizationSuggestionArgs {
  @ApiProperty({
    required: true,
    type: () => OptimizationSuggestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OptimizationSuggestionWhereUniqueInput)
  @Field(() => OptimizationSuggestionWhereUniqueInput, { nullable: false })
  where!: OptimizationSuggestionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OptimizationSuggestionUpdateInput,
  })
  @ValidateNested()
  @Type(() => OptimizationSuggestionUpdateInput)
  @Field(() => OptimizationSuggestionUpdateInput, { nullable: false })
  data!: OptimizationSuggestionUpdateInput;
}

export { UpdateOptimizationSuggestionArgs as UpdateOptimizationSuggestionArgs };
