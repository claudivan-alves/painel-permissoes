import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      [type]="type()"
      [disabled]="disabled()"
      [class]="classes()"
      (click)="pressed.emit()">
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppButtonComponent {
  readonly type = input<'button' | 'submit'>('button');
  readonly variant = input<'primary' | 'ghost' | 'outline'>('primary');
  readonly disabled = input(false);
  readonly pressed = output<void>();

  classes(): string {
    const base = 'inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold transition focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50';
    const variants = {
      primary: 'bg-[#0b2545] text-white hover:bg-[#12365f] focus:ring-blue-500/15',
      ghost: 'text-slate-600 hover:bg-slate-100 focus:ring-slate-500/10',
      outline: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:ring-slate-500/10'
    };
    return `${base} ${variants[this.variant()]}`;
  }
}
