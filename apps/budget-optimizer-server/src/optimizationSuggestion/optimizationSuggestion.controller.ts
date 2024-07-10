import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OptimizationSuggestionService } from "./optimizationSuggestion.service";
import { OptimizationSuggestionControllerBase } from "./base/optimizationSuggestion.controller.base";

@swagger.ApiTags("optimizationSuggestions")
@common.Controller("optimizationSuggestions")
export class OptimizationSuggestionController extends OptimizationSuggestionControllerBase {
  constructor(
    protected readonly service: OptimizationSuggestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
