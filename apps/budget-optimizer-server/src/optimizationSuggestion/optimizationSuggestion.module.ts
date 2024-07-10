import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OptimizationSuggestionModuleBase } from "./base/optimizationSuggestion.module.base";
import { OptimizationSuggestionService } from "./optimizationSuggestion.service";
import { OptimizationSuggestionController } from "./optimizationSuggestion.controller";
import { OptimizationSuggestionResolver } from "./optimizationSuggestion.resolver";

@Module({
  imports: [OptimizationSuggestionModuleBase, forwardRef(() => AuthModule)],
  controllers: [OptimizationSuggestionController],
  providers: [OptimizationSuggestionService, OptimizationSuggestionResolver],
  exports: [OptimizationSuggestionService],
})
export class OptimizationSuggestionModule {}
