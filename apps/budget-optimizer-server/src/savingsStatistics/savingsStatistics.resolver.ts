import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SavingsStatisticsResolverBase } from "./base/savingsStatistics.resolver.base";
import { SavingsStatistics } from "./base/SavingsStatistics";
import { SavingsStatisticsService } from "./savingsStatistics.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SavingsStatistics)
export class SavingsStatisticsResolver extends SavingsStatisticsResolverBase {
  constructor(
    protected readonly service: SavingsStatisticsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
