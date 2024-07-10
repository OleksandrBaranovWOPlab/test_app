/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsEnum,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";
import { EnumSavingsStatisticsOptimizationLevel } from "./EnumSavingsStatisticsOptimizationLevel";
import { User } from "../../user/base/User";

@ObjectType()
class SavingsStatistics {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  timePeriod!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalSavings!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumSavingsStatisticsOptimizationLevel,
  })
  @IsEnum(EnumSavingsStatisticsOptimizationLevel)
  @IsOptional()
  @Field(() => EnumSavingsStatisticsOptimizationLevel, {
    nullable: true,
  })
  optimizationLevel?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { SavingsStatistics as SavingsStatistics };
