import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SavingsStatisticsService } from "./savingsStatistics.service";
import { SavingsStatisticsControllerBase } from "./base/savingsStatistics.controller.base";

@swagger.ApiTags("savingsStatistics")
@common.Controller("savingsStatistics")
export class SavingsStatisticsController extends SavingsStatisticsControllerBase {
  constructor(
    protected readonly service: SavingsStatisticsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
