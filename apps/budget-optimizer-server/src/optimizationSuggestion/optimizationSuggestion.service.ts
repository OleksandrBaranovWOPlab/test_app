import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OptimizationSuggestionServiceBase } from "./base/optimizationSuggestion.service.base";

@Injectable()
export class OptimizationSuggestionService extends OptimizationSuggestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
