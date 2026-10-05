import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideLucideIcons, LucideChartColumn, LucideCheck, LucideChevronDown, LucideCircleCheck, LucideCircleUserRound, LucideClock, LucideEye, LucideEyeOff, LucideFileText, LucideFilter, LucideFolderOpen, LucideKeyRound, LucideLockKeyhole, LucideLogIn, LucideLogOut, LucideMessageSquare, LucidePackage, LucideRotateCcw, LucideSettings, LucideShieldCheck, LucideUserRoundCog, LucideUsers, LucideX } from '@lucide/angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideLucideIcons(
      LucideChartColumn, LucideCircleCheck, LucideCircleUserRound, LucideClock, LucideEye, LucideEyeOff,
      LucideFileText, LucideFilter, LucideFolderOpen, LucideKeyRound, LucideLockKeyhole, LucideLogIn,
      LucideLogOut, LucideMessageSquare, LucidePackage, LucideRotateCcw, LucideSettings, LucideShieldCheck,
      LucideUserRoundCog, LucideUsers, LucideX, LucideChevronDown, LucideCheck
    )
  ]
};
