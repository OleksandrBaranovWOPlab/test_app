import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OptimizationSuggestionResolverBase } from "./base/optimizationSuggestion.resolver.base";
import { OptimizationSuggestion } from "./base/OptimizationSuggestion";
import { OptimizationSuggestionService } from "./optimizationSuggestion.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OptimizationSuggestion)
export class OptimizationSuggestionResolver extends OptimizationSuggestionResolverBase {
  constructor(
    protected readonly service: OptimizationSuggestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
