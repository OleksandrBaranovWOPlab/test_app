import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SavingsStatisticsModuleBase } from "./base/savingsStatistics.module.base";
import { SavingsStatisticsService } from "./savingsStatistics.service";
import { SavingsStatisticsController } from "./savingsStatistics.controller";
import { SavingsStatisticsResolver } from "./savingsStatistics.resolver";

@Module({
  imports: [SavingsStatisticsModuleBase, forwardRef(() => AuthModule)],
  controllers: [SavingsStatisticsController],
  providers: [SavingsStatisticsService, SavingsStatisticsResolver],
  exports: [SavingsStatisticsService],
})
export class SavingsStatisticsModule {}
