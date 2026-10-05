import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideIcon } from '@lucide/angular';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [LucideIcon],
  template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm" (click)="closed.emit()">
      <section class="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl" role="dialog" aria-modal="true" (click)="$event.stopPropagation()">
        <header class="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div><h2 class="text-base font-bold text-slate-900">{{ title() }}</h2><p class="text-xs text-slate-500">{{ description() }}</p></div>
          <button type="button" class="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700" (click)="closed.emit()"><svg lucideIcon="x" [size]="18"></svg></button>
        </header>
        <div class="p-5"><ng-content></ng-content></div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppModalComponent {
  readonly title = input('');
  readonly description = input('');
  readonly closed = output<void>();
}
