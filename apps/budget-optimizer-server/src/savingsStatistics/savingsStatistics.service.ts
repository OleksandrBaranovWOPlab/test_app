import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SavingsStatisticsServiceBase } from "./base/savingsStatistics.service.base";

@Injectable()
export class SavingsStatisticsService extends SavingsStatisticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
